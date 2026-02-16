
import { Router, Request, Response } from 'express';
import User from '../models/User';
import { startOfDay, isSameDay, subDays } from 'date-fns';

const router = Router();

// Helper: Check Streak
async function checkStreak(userId: string) {
    const user = await User.findById(userId);
    if (!user) return null;

    const today = new Date();
    const lastActive = user.streak?.last_active_date ? new Date(user.streak.last_active_date) : new Date(0);

    // If active TODAY, no change needed (already counted)
    if (isSameDay(today, lastActive)) {
        return user;
    }

    // If active YESTERDAY, increment streak
    const yesterday = subDays(today, 1);
    if (isSameDay(yesterday, lastActive)) {
        user.streak = {
            count: (user.streak?.count || 0) + 1,
            last_active_date: today
        };
        // Daily Login Bonus: 10 Coins
        user.coins = (user.coins || 0) + 10;
        await user.save();
        return user;
    }

    // Otherwise, Reset Streak (Missed a day)
    // But verify it's not the FIRST ever login (streak 0) which sets to 1
    user.streak = {
        count: 1,
        last_active_date: today
    };
    // Daily Login Bonus for restarting: 5 Coins
    user.coins = (user.coins || 0) + 5;
    await user.save();
    return user;
}

router.get('/status', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    if (!userId) return res.status(401).json({ error: 'User ID required' });

    try {
        const user = await checkStreak(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        return res.json({
            coins: user.coins,
            streak: user.streak
        });
    } catch (error) {
        console.error("Gamification Error:", error);
        return res.status(500).json({ error: "Internal Error" });
    }
});

// Internal/Admin use only usually, but for now we trust the client ( MVP )
// or better, check authorization if this is called from test completion
router.post('/earn', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    const { amount, reason } = req.body; // e.g., amount: 50, reason: "Test Complete"

    if (!userId) return res.status(401).json({ error: 'User ID required' });
    if (!amount || amount < 0) return res.status(400).json({ error: 'Valid amount required' });

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.coins = (user.coins || 0) + Number(amount);
        await user.save();

        return res.json({
            coins: user.coins,
            message: `Earned ${amount} coins!`
        });
    } catch (error) {
        console.error("Coin Update Error:", error);
        return res.status(500).json({ error: "Internal Error" });
    }
});

// --- Referral System ---

router.get('/referral-code', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    if (!userId) return res.status(401).json({ error: 'User ID required' });

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (user.referral_code) {
            return res.json({ code: user.referral_code });
        }

        // Generate Code: FIRST4NAME + RAND4
        const namePart = (user.name || 'USER').replace(/\s/g, '').substring(0, 4).toUpperCase();
        const randPart = Math.floor(1000 + Math.random() * 9000);
        const newCode = `${namePart}${randPart}`;

        user.referral_code = newCode;
        await user.save();

        return res.json({ code: newCode });
    } catch (error) {
        console.error("Referral Gen Error:", error);
        return res.status(500).json({ error: "Internal Error" });
    }
});

router.post('/redeem-referral', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    const { code } = req.body;

    if (!userId) return res.status(401).json({ error: 'User ID required' });
    if (!code) return res.status(400).json({ error: 'Referral code required' });

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (user.referred_by) {
            return res.status(400).json({ error: 'You have already redeemed a referral code.' });
        }

        if (user.referral_code === code) {
            return res.status(400).json({ error: 'You cannot refer yourself.' });
        }

        // Find Referrer
        const referrer = await User.findOne({ referral_code: code });
        if (!referrer) {
            return res.status(404).json({ error: 'Invalid referral code.' });
        }

        // Apply Referral
        user.referred_by = referrer.id;
        user.coins = (user.coins || 0) + 500; // Referee Bonus
        await user.save();

        referrer.coins = (referrer.coins || 0) + 500; // Referrer Bonus
        await referrer.save();

        return res.json({
            success: true,
            message: 'Referral applied! You and your friend earned 500 coins each.',
            coins: user.coins
        });

    } catch (error) {
        console.error("Referral Redeem Error:", error);
        return res.status(500).json({ error: "Internal Error" });
    }
});

// --- Test Unlock System ---

const TEST_UNLOCK_COST = 100;

router.post('/unlock-test', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    const { testId } = req.body;

    if (!userId) return res.status(401).json({ error: 'User ID required' });
    if (!testId) return res.status(400).json({ error: 'Test ID required' });

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Free-access users don't need to spend coins or unlock
        if ((user as any).free_access === true) {
            return res.json({
                success: true,
                message: 'Free access enabled',
                coins: user.coins,
                unlockedTestId: testId
            });
        }

        // Check if already unlocked
        const isUnlocked = user.unlocked_tests?.some((id: any) => id.toString() === testId);
        if (isUnlocked) {
            return res.status(400).json({ error: 'Test already unlocked' });
        }

        // Check Balance
        if (user.coins < TEST_UNLOCK_COST) {
            return res.status(400).json({
                error: `Insufficient coins. You need ${TEST_UNLOCK_COST} coins.`,
                required: TEST_UNLOCK_COST,
                current: user.coins
            });
        }

        // Deduct Coins & Unlock
        user.coins -= TEST_UNLOCK_COST;
        if (!user.unlocked_tests) user.unlocked_tests = [];
        // @ts-ignore - ObjectId casting issue, safe to push string
        user.unlocked_tests.push(testId);

        await user.save();

        return res.json({
            success: true,
            message: 'Test unlocked successfully!',
            coins: user.coins,
            unlockedTestId: testId
        });

    } catch (error) {
        console.error("Unlock Test Error:", error);
        return res.status(500).json({ error: "Internal Error" });
    }
});

export default router;
