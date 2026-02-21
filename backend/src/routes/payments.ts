
import { Router, Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import User from '../models/User';
import Course from '../models/Course';

const router = Router();

// Retrieve keys from environment variables
const KEY_ID = process.env.RAZORPAY_KEY_ID;
const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;

// Define static prices for now (or fetch from DB if you add price to Course model)
// For MVP, we'll map courseId -> price in INR
const COURSE_PRICES: Record<string, number> = {
    // Class 9
    '698f874c217f7f278986466d': 9,
    // Class 8
    '698f89db6aaedcf04fa55612': 9,
    // Class 7
    '698f89db6aaedcf04fa555f1': 9,
    // Class 6
    '698f89db6aaedcf04fa555d0': 9,
    // Class 5
    '698f89db6aaedcf04fa5559d': 9,
    // Class 10 Board
    '698f8a866fadfeda52b19110': 9,
    // Class 11 Science
    '698f8a866fadfeda52b19140': 9,
    // Premium NEET (Class 12)
    '699f9a1b2c3d4e5f6a7b8c9d': 499
};

// Debug endpoint to check keys (non-critical)
router.get('/debug', (req: Request, res: Response) => {
    const kId = process.env.RAZORPAY_KEY_ID;
    const kSec = process.env.RAZORPAY_KEY_SECRET;
    res.json({
        keyIdExists: !!kId,
        keyIdPrefix: kId ? kId.substring(0, 4) + '...' : null,
        keySecretExists: !!kSec,
    });
});

router.post('/create-order', async (req: Request, res: Response) => {
    try {
        console.log('[Payment] create-order called');

        const _KEY_ID = process.env.RAZORPAY_KEY_ID;
        const _KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

        // 1. Check Env Vars
        if (!_KEY_ID || !_KEY_SECRET) {
            console.error('[Payment] Razorpay keys missing in env');
            return res.status(500).json({
                error: 'Server Config Error: Razorpay keys not set',
                detail: 'Check .env file for RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET'
            });
        }

        const userId = req.header('x-user-id');
        if (!userId) {
            console.warn('[Payment] User ID missing in headers');
            return res.status(401).json({ error: 'User ID required' });
        }

        const { courseId } = req.body;
        if (!courseId) {
            console.warn('[Payment] courseId missing in body');
            return res.status(400).json({ error: 'courseId required' });
        }

        console.log(`[Payment] Processing for User: ${userId}, Course: ${courseId}`);

        // 2. Database Check
        let courseTitle: string = "Course";
        try {
            const course = await Course.findById(courseId);
            if (!course) {
                console.warn(`[Payment] Course ${courseId} not found in DB`);
                return res.status(404).json({ error: 'Course not found in database' });
            }
            courseTitle = course.title;
        } catch (dbErr: any) {
            console.error('[Payment] DB Error:', dbErr);
            return res.status(500).json({ error: 'Database Error', details: dbErr.message });
        }

        // 3. Price Resolution
        const price = COURSE_PRICES[courseId] || 9; // Default fallback if not in map
        console.log(`[Payment] Price resolved: ${price}`);

        // 4. Razorpay Initialization
        let razorpay;
        try {
            razorpay = new Razorpay({
                key_id: _KEY_ID,
                key_secret: _KEY_SECRET,
            });
        } catch (rzpInitErr: any) {
            console.error('[Payment] Razorpay Init Failed:', rzpInitErr);
            return res.status(500).json({ error: 'Razorpay Client Init Failed', details: rzpInitErr.message });
        }

        // 5. Order Creation
        const options = {
            amount: price * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${userId}_${courseId}_${Date.now()}`,
            notes: {
                userId,
                courseId,
                courseTitle
            }
        };

        try {
            const order = await razorpay.orders.create(options);
            console.log('[Payment] Order created:', order.id);
            return res.json({
                orderId: order.id,
                amount: order.amount,
                currency: order.currency,
                keyId: _KEY_ID
            });
        } catch (rzpOrderErr: any) {
            console.error('[Payment] Razorpay Order Create Failed:', rzpOrderErr);

            const details =
                (rzpOrderErr?.error?.description && String(rzpOrderErr.error.description)) ||
                (rzpOrderErr?.error?.message && String(rzpOrderErr.error.message)) ||
                (rzpOrderErr?.message && String(rzpOrderErr.message)) ||
                JSON.stringify(rzpOrderErr);

            return res.status(500).json({
                error: 'Razorpay API Error',
                details
            });
        }

    } catch (error: any) {
        console.error('[Payment] Critical Unhandled Error:', error);
        return res.status(500).json({
            error: error.message || 'Critical Internal Server Error',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

router.post('/verify', async (req: Request, res: Response) => {
    try {
        const _KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
        if (!_KEY_SECRET) return res.status(500).json({ error: 'Server config error: Missing Secret' });

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;
        const userId = req.header('x-user-id');

        // Verify Signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", _KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Payment Success -> Enroll User
            if (userId && courseId) {
                await User.findByIdAndUpdate(userId, {
                    $addToSet: { purchased_courses: courseId }
                });
                console.log(`User ${userId} enrolled in ${courseId}`);
            }

            return res.json({ success: true, message: "Payment verified and course unlocked" });
        } else {
            return res.status(400).json({ success: false, error: "Invalid Signature" });
        }
    } catch (error: any) {
        console.error("Verification Error:", error);
        return res.status(500).json({ error: error.message || "Verification Failed" });
    }
});

// Optional: Webhook to handle async success (crucial for production)
router.post('/webhook', async (req: Request, res: Response) => {
    try {
        if (!WEBHOOK_SECRET) return res.status(500).send('Webhook Secret not set');

        const shasum = crypto.createHmac('sha256', WEBHOOK_SECRET);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest('hex');

        if (digest === req.headers['x-razorpay-signature']) {
            const event = req.body.event;
            // Handle 'order.paid' or 'payment.captured'
            if (event === 'payment.captured' || event === 'order.paid') {
                const paymentEntity = req.body.payload.payment.entity;
                const notes = paymentEntity.notes;
                // { userId: '...', courseId: '...' }

                if (notes?.userId && notes?.courseId) {
                    await User.findByIdAndUpdate(notes.userId, {
                        $addToSet: { purchased_courses: notes.courseId }
                    });
                    console.log(`Webhook: Enrolled ${notes.userId} in ${notes.courseId}`);
                }
            }
            res.json({ status: 'ok' });
        } else {
            res.status(403).send('Invalid Signature');
        }
    } catch (err) {
        console.error("Webhook Error:", err);
        res.status(500).send('Webhook Error');
    }
});

export default router;
