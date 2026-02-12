import User from '../models/User';
import { hashPassword } from './auth';

let ran = false;

export async function ensureBootstrapAdmin() {
  if (ran) return;
  ran = true;

  const email = (process.env.ADMIN_BOOTSTRAP_EMAIL || '').trim().toLowerCase();
  const password = (process.env.ADMIN_BOOTSTRAP_PASSWORD || '').trim();
  const name = (process.env.ADMIN_BOOTSTRAP_NAME || '').trim();

  if (!email || !password || !name) return;

  const existingAdminRaw = await User.findOne({ role: 'admin', active: true }).select('_id').lean().exec();
  const existingAdmin = (Array.isArray(existingAdminRaw) ? existingAdminRaw[0] : existingAdminRaw) as { _id?: unknown } | null;
  if (existingAdmin?._id) return;

  const existingRaw = await User.findOne({ email }).select('_id').lean().exec();
  const existing = (Array.isArray(existingRaw) ? existingRaw[0] : existingRaw) as { _id?: unknown } | null;
  if (existing?._id) {
    await User.updateOne({ _id: existing._id }, { $set: { role: 'admin', active: true } });
    return;
  }

  const hashed = await hashPassword(password);
  await User.create({
    email,
    password: hashed,
    name,
    role: 'admin',
    class_grade: 12,
    active: true,
  });
}
