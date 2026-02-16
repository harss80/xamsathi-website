import mongoose, { Schema, model, models } from 'mongoose';

export interface IFreeAccessEmail {
  _id?: mongoose.Types.ObjectId;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const FreeAccessEmailSchema = new Schema<IFreeAccessEmail>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
}, { timestamps: true });

const FreeAccessEmail = models.FreeAccessEmail || model<IFreeAccessEmail>('FreeAccessEmail', FreeAccessEmailSchema);
export default FreeAccessEmail;
