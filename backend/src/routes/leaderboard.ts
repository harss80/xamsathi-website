import { Router, Request, Response } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry';
import User from '../models/User';

const router = Router();

// Submit a new score to the leaderboard
router.post('/submit', async (req: Request, res: Response) => {
    const userId = req.header('x-user-id');
    if (!userId) return res.status(401).json({ error: 'x-user-id required' });

    const { testSeriesId, score, accuracy } = req.body;
    if (!testSeriesId || score === undefined) {
        return res.status(400).json({ error: 'testSeriesId and score are required' });
    }

    try {
        // Check if user already has an entry for this test series
        const existingEntry = await LeaderboardEntry.findOne({ user_id: userId, test_series_id: testSeriesId });

        if (existingEntry) {
            // Logic: Update only if score is higher? Or always update to latest?
            // Usually leaderboard shows "Best Score".
            if (score > existingEntry.score) {
                existingEntry.score = score;
                existingEntry.accuracy = accuracy || existingEntry.accuracy;
                await existingEntry.save();
            }
            return res.json({ entry: existingEntry, updated: score > existingEntry.score });
        } else {
            const newEntry = await LeaderboardEntry.create({
                user_id: userId,
                test_series_id: testSeriesId,
                score,
                accuracy: accuracy || 0
            });
            return res.json({ entry: newEntry, updated: true });
        }
    } catch (error) {
        console.error('Leaderboard submit error:', error);
        res.status(500).json({ error: 'Failed to submit score' });
    }
});

// Get leaderboard for a specific test series
router.get('/:testSeriesId', async (req: Request, res: Response) => {
    const { testSeriesId } = req.params;

    try {
        const entries = await LeaderboardEntry.find({ test_series_id: testSeriesId })
            .sort({ score: -1 })
            .limit(50) // Limit to top 50
            .lean();

        // Populate user details manually or via mongoose populate if reference was standard
        // Since user_id is string in schema, we do manual lookup or aggregation.
        // Aggregation is better but let's do parallel fetch for simplicity if list is small.

        const userIds = entries.map(e => e.user_id);
        const users = await User.find({ _id: { $in: userIds } }).select('_id name avatar').lean();

        const userMap = new Map();
        users.forEach(u => userMap.set(String(u._id), u));

        const leaderboard = entries.map((entry, index) => {
            const user = userMap.get(entry.user_id);
            return {
                rank: index + 1,
                name: user ? user.name : 'Unknown Student',
                avatar: user ? user.avatar : '/default-avatar.png',
                score: entry.score,
                accuracy: entry.accuracy,
                change: 'same' // Calculate trend if we store history
            };
        });

        res.json(leaderboard);
    } catch (error) {
        console.error('Leaderboard fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});

export default router;
