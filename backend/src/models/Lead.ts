import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  action: string;
  entity_type?: string;
  entity_id?: string;
  path?: string;
  referrer?: string;
  ip?: string;
  user_agent?: string;
  country?: string;
  region?: string;
  city?: string;
  meta?: Record<string, unknown>;
  created_at: Date;
}

const LeadSchema = new Schema<ILead>({
  action: { type: String, required: true, trim: true },
  entity_type: { type: String, trim: true },
  entity_id: { type: String, trim: true },
  path: { type: String, trim: true },
  referrer: { type: String, trim: true },
  ip: { type: String, trim: true },
  user_agent: { type: String, trim: true },
  country: { type: String, trim: true },
  region: { type: String, trim: true },
  city: { type: String, trim: true },
  meta: { type: Schema.Types.Mixed },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
