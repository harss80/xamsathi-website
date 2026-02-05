import mongoose, { Schema, model, models } from 'mongoose';

export interface IQuestion {
  _id?: mongoose.Types.ObjectId;
  test_id: mongoose.Types.ObjectId;
  body: string;
  options: string[];
  correct_indices: number[];
  explanation?: string | null;
  tags?: string[] | null;
  pool_key?: string | null;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  test_id: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
  body: { type: String, required: true },
  options: { type: [String], required: true },
  correct_indices: { type: [Number], required: true },
  explanation: { type: String, default: null },
  tags: { type: [String], default: null },
  pool_key: { type: String, default: null },
  active: { type: Boolean, default: true },
}, { timestamps: true });

const Question = models.Question || model<IQuestion>('Question', QuestionSchema);
export default Question;
