import { Router, Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User';
import { generateToken } from '../lib/auth';

const router = Router();
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

// Google sign-in
router.post('/google', async (req: Request, res: Response) => {
  try {
    const { token } = req.body as { token?: string };
    if (!token) {
      return res.status(400).json({ error: 'Google token required' });
    }

    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return res.status(400).json({ error: 'Invalid Google token' });
    }

    const { email, name, picture } = payload;

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      // Create new user with Google data
      user = new User({
        email,
        name: name || email.split('@')[0],
        password: 'google-auth', // Placeholder password
        class_grade: 10, // Default class grade
        avatar: picture,
        active: true,
      });
      await user.save();
    } else if (!user.active) {
      return res.status(401).json({ error: 'Account deactivated' });
    } else {
      // Update last login and avatar if changed
      user.last_login = new Date();
      if (picture && !user.avatar) user.avatar = picture;
      await user.save();
    }

    const token_jwt = generateToken(user._id.toString());
    return res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        class_grade: user.class_grade,
        avatar: user.avatar,
        last_login: user.last_login,
      },
      token: token_jwt,
    });
  } catch (err) {
    console.error('Google auth error:', err);
    return res.status(500).json({ error: 'Google authentication failed' });
  }
});

export default router;
