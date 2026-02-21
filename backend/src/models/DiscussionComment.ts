import mongoose, { Schema, Document } from 'mongoose';

export interface IDiscussionComment extends Document {
  question_id: string;
  user_id: mongoose.Types.ObjectId;
  user_name: string;
  body: string;
  parent_id?: mongoose.Types.ObjectId | null;
  upvotes: number;
  upvoters: mongoose.Types.ObjectId[];
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

const DiscussionCommentSchema = new Schema<IDiscussionComment>({
  question_id: { type: String, required: true, index: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  user_name: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true },
  parent_id: { type: Schema.Types.ObjectId, ref: 'DiscussionComment', default: null, index: true },
  upvotes: { type: Number, default: 0 },
  upvoters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

DiscussionCommentSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

export default mongoose.models.DiscussionComment || mongoose.model<IDiscussionComment>('DiscussionComment', DiscussionCommentSchema);
