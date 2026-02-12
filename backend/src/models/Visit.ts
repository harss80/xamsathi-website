import mongoose, { Schema, Document } from 'mongoose';

export interface IVisit extends Document {
  path: string;
  referrer?: string;
  ip?: string;
  user_agent?: string;
  country?: string;
  region?: string;
  city?: string;
  created_at: Date;
}

const VisitSchema = new Schema<IVisit>({
  path: { type: String, required: true, trim: true },
  referrer: { type: String, trim: true },
  ip: { type: String, trim: true },
  user_agent: { type: String, trim: true },
  country: { type: String, trim: true },
  region: { type: String, trim: true },
  city: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.models.Visit || mongoose.model<IVisit>('Visit', VisitSchema);
