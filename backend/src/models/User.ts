import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string; // hashed
  name: string;
  class_grade: number;
  phone?: string;
  avatar?: string;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
  active: boolean;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  class_grade: { type: Number, required: true, min: 1, max: 12 },
  phone: { type: String, trim: true },
  avatar: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_login: { type: Date },
  active: { type: Boolean, default: true },
});

UserSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
