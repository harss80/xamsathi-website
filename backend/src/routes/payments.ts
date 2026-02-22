
import { Router, Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import User from '../models/User';

const router = Router();

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;

let razorpayClient: Razorpay | null = null;

const getRazorpayClient = () => {
    const _KEY_ID = process.env.RAZORPAY_KEY_ID;
    const _KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

    if (!_KEY_ID || !_KEY_SECRET) {
        return { ok: false as const, error: 'Server Config Error: Razorpay keys not set' };
    }

    if (!razorpayClient) {
        razorpayClient = new Razorpay({
            key_id: _KEY_ID,
            key_secret: _KEY_SECRET,
        });
    }

    return { ok: true as const, client: razorpayClient, keyId: _KEY_ID };
};

const getRazorpayErrorDetails = (err: unknown): string => {
    if (err instanceof Error) return err.message;
    if (!err || typeof err !== 'object') return String(err);

    const maybe = err as {
        error?: {
            description?: unknown;
            message?: unknown;
        };
        message?: unknown;
    };

    if (maybe.error?.description) return String(maybe.error.description);
    if (maybe.error?.message) return String(maybe.error.message);
    if (maybe.message) return String(maybe.message);

    try {
        return JSON.stringify(err);
    } catch {
        return String(err);
    }
};

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
    '699f9a1b2c3d4e5f6a7b8c9d': 499,
    // Premium NEET Rank Booster (Class 12)
    '79bf9a1b2c3d4e5f6a7b8c9d': 199,
    // Premium NEET Concept Mastery (Class 12)
    '89cf9a1b2c3d4e5f6a7b8c9d': 299,
    // Premium NEET Intensive Papers Series (Class 12)
    '99df9a1b2c3d4e5f6a7b8c9d': 1999,
    // Premium JEE Main Copy Mocks (Class 11)
    'a1ef9a1b2c3d4e5f6a7b8c9d': 1999,
    // Premium JEE Main Copy Mocks (Class 12)
    'b1ff9a1b2c3d4e5f6a7b8c9d': 1999
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
        const rzp = getRazorpayClient();
        if (!rzp.ok) {
            return res.status(500).json({
                error: rzp.error,
                detail: 'Check .env file for RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET'
            });
        }

        const userId = req.header('x-user-id');
        if (!userId) {
            return res.status(401).json({ error: 'User ID required' });
        }

        const { courseId } = req.body;
        if (!courseId) {
            return res.status(400).json({ error: 'courseId required' });
        }

        // 3. Price Resolution
        const price = COURSE_PRICES[courseId] || 9; // Default fallback if not in map

        // 5. Order Creation
        const receipt = (() => {
            try {
                const ts = Date.now().toString(36);
                const h = crypto
                    .createHash('sha256')
                    .update(`${userId}:${courseId}:${Date.now()}`)
                    .digest('hex')
                    .slice(0, 16);
                return `rcpt_${ts}_${h}`.slice(0, 40);
            } catch {
                return `rcpt_${Date.now().toString(36)}`.slice(0, 40);
            }
        })();

        const options = {
            amount: price * 100, // Amount in paise
            currency: 'INR',
            receipt,
            notes: {
                userId,
                courseId
            }
        };

        try {
            const order = await rzp.client.orders.create(options);
            return res.json({
                orderId: order.id,
                amount: order.amount,
                currency: order.currency,
                keyId: rzp.keyId
            });
        } catch (rzpOrderErr: unknown) {
            const details = getRazorpayErrorDetails(rzpOrderErr);

            return res.status(500).json({
                error: 'Razorpay API Error',
                details
            });
        }

    } catch (error: unknown) {
        console.error('[Payment] Critical Unhandled Error:', error);
        return res.status(500).json({
            error: (error instanceof Error ? error.message : String(error)) || 'Critical Internal Server Error',
            stack: (process.env.NODE_ENV === 'development' && error instanceof Error) ? error.stack : undefined
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
                await User.updateOne({ _id: userId }, {
                    $addToSet: { purchased_courses: courseId }
                });
            }

            return res.json({ success: true, message: "Payment verified and course unlocked" });
        } else {
            return res.status(400).json({ success: false, error: "Invalid Signature" });
        }
    } catch (error: unknown) {
        console.error("Verification Error:", error);
        return res.status(500).json({ error: (error instanceof Error ? error.message : String(error)) || "Verification Failed" });
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
    } catch (err: unknown) {
        console.error("Webhook Error:", err);
        res.status(500).send('Webhook Error');
    }
});

export default router;
