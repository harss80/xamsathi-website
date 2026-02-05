import mongoose, { Schema, model, models } from 'mongoose';

export interface ITest {
  _id?: mongoose.Types.ObjectId;
  course_id: mongoose.Types.ObjectId;
  title: string;
  difficulty?: string | null;
  duration_min: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const TestSchema = new Schema<ITest>({
  course_id: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  difficulty: { type: String, default: null },
  duration_min: { type: Number, default: 60 },
  active: { type: Boolean, default: true },
}, { timestamps: true });

const Test = models.Test || model<ITest>('Test', TestSchema);
export default Test;
