import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface ILeaderboardEntry extends Document {
    user_id: string; // References User._id
    test_series_id: string; // e.g. "neet-ug-mock-180"
    score: number;
    accuracy: number; // percentage
    created_at: Date;
    updated_at: Date;
}

const LeaderboardEntrySchema = new Schema<ILeaderboardEntry>({
    user_id: { type: String, required: true },
    test_series_id: { type: String, required: true, index: true },
    score: { type: Number, required: true },
    accuracy: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Update timestamp on save
LeaderboardEntrySchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});

// Compound index for efficient querying: (test_series_id, score descending)
LeaderboardEntrySchema.index({ test_series_id: 1, score: -1 });

export default models.LeaderboardEntry || model<ILeaderboardEntry>('LeaderboardEntry', LeaderboardEntrySchema);
