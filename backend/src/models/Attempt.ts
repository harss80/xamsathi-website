import mongoose, { Schema, model, models } from 'mongoose';

export interface IAttempt {
  _id?: mongoose.Types.ObjectId;
  user_id: string;
  test_id: mongoose.Types.ObjectId;
  question_order: mongoose.Types.ObjectId[] | string[];
  started_at?: Date;
  submitted_at?: Date | null;
  score?: number | null;
  total?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

const AttemptSchema = new Schema<IAttempt>({
  user_id: { type: String, required: true },
  test_id: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
  question_order: { type: [Schema.Types.ObjectId], required: true },
  started_at: { type: Date, default: () => new Date() },
  submitted_at: { type: Date, default: null },
  score: { type: Number, default: null },
  total: { type: Number, default: null },
}, { timestamps: true });

const Attempt = models.Attempt || model<IAttempt>('Attempt', AttemptSchema);
export default Attempt;
