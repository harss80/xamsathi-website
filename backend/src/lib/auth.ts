import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}

export async function createUser(email: string, password: string, name: string, class_grade: number) {
  const hashedPassword = await hashPassword(password);
  const user = new User({
    email,
    password: hashedPassword,
    name,
    class_grade,
  });
  return user.save();
}

export async function authenticateUser(email: string, password: string) {
  const user = await User.findOne({ email, active: true });
  if (!user) return null;
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) return null;
  // Update last login
  user.last_login = new Date();
  await user.save();
  return user;
}
