import mongoose, { Schema, model, models } from 'mongoose';

export interface ICourse {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description?: string | null;
  class_grade: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String, default: null },
  class_grade: { type: Number, required: true, min: 1, max: 12 },
  active: { type: Boolean, default: true },
}, { timestamps: true });

const Course = models.Course || model<ICourse>('Course', CourseSchema);
export default Course;
