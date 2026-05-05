import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IClient extends Document {
  businessName: string;
  businessType: string;
  googleReviewLink: string;
  location?: string;
  tone?: string;
  customPrompt?: string;
  payment: {
    status: 'paid' | 'pending';
    amount: number;
    mode: 'upi' | 'cash' | '';
    validTill?: Date;
  };
  isActive: boolean;
  createdAt: Date;
}

const ClientSchema: Schema = new Schema({
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  googleReviewLink: { type: String, required: true },
  location: { type: String },
  tone: { type: String },
  customPrompt: { type: String },
  payment: {
    status: { type: String, enum: ['paid', 'pending'], default: 'pending' },
    amount: { type: Number, default: 0 },
    mode: { type: String, enum: ['upi', 'cash', ''], default: '' },
    validTill: { type: Date },
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const Client: Model<IClient> = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);
