
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
    '698f8a866fadfeda52b19140': 9
};

router.post('/create-order', async (req: Request, res: Response) => {
    try {
        if (!KEY_ID || !KEY_SECRET) {
            return res.status(500).json({ error: 'Razorpay keys not configured' });
        }

        const userId = req.header('x-user-id');
        if (!userId) return res.status(401).json({ error: 'User ID required' });

        const { courseId } = req.body;
        if (!courseId) return res.status(400).json({ error: 'courseId required' });

        // Check if course exists
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ error: 'Course not found' });

        // Get Price
        const price = COURSE_PRICES[courseId] || 9; // Default fallback if not in map

        const razorpay = new Razorpay({
            key_id: KEY_ID,
            key_secret: KEY_SECRET,
        });

        const options = {
            amount: price * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${userId}_${courseId}_${Date.now()}`,
            notes: {
                userId,
                courseId,
                courseTitle: course.title
            }
        };

        const order = await razorpay.orders.create(options);
        return res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: KEY_ID
        });

    } catch (error) {
        console.error('Create Order Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/verify', async (req: Request, res: Response) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;
        const userId = req.header('x-user-id');

        if (!KEY_SECRET) return res.status(500).json({ error: 'Server config error' });

        // Verify Signature
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", KEY_SECRET)
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
    } catch (error) {
        console.error("Verification Error:", error);
        return res.status(500).json({ error: "Verification Failed" });
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
