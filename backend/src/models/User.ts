import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string; // hashed
  name: string;
  role: 'student' | 'admin';
  class_grade: number;
  phone?: string;
  avatar?: string;
  bio?: string;
  free_access: boolean;
  onboarding_completed: boolean;
  target_exam?: 'neet' | 'jee' | 'cbse' | 'other';
  stream?: 'pcm' | 'pcb' | 'commerce' | 'arts' | 'na';
  medium?: 'english' | 'hindi' | 'other';
  school?: string;
  city?: string;
  guardian_phone?: string;
  student_photo?: string;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
  active: boolean;
  reset_password_token_hash?: string;
  reset_password_expires_at?: Date;
  purchased_courses?: mongoose.Types.ObjectId[];
  coins: number;
  streak: {
    count: number;
    last_active_date: Date;
  };
  referral_code?: string;
  referred_by?: string;
  unlocked_tests?: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  class_grade: { type: Number, required: true, min: 1, max: 12 },
  phone: { type: String, trim: true },
  avatar: { type: String },
  bio: { type: String, trim: true },
  free_access: { type: Boolean, default: false },
  onboarding_completed: { type: Boolean, default: false },
  target_exam: { type: String, enum: ['neet', 'jee', 'cbse', 'other'] },
  stream: { type: String, enum: ['pcm', 'pcb', 'commerce', 'arts', 'na'], default: 'na' },
  medium: { type: String, enum: ['english', 'hindi', 'other'] },
  school: { type: String, trim: true },
  city: { type: String, trim: true },
  guardian_phone: { type: String, trim: true },
  student_photo: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_login: { type: Date },
  active: { type: Boolean, default: true },
  reset_password_token_hash: { type: String },
  reset_password_expires_at: { type: Date },
  purchased_courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  unlocked_tests: [{ type: Schema.Types.ObjectId, ref: 'Test' }],
  coins: { type: Number, default: 0 },
  streak: {
    count: { type: Number, default: 0 },
    last_active_date: { type: Date, default: Date.now }
  },
  referral_code: { type: String, unique: true, sparse: true },
  referred_by: { type: String }
});

UserSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
