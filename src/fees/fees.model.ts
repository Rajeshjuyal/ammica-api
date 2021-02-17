import * as mongoose from 'mongoose';
export const FeesSchema = new mongoose.Schema({
  id: { type: String, required: true },
  sid: { type: String, required: true },
  pid: { type: Number, required: true },
  amount: { type: Number, required: true },
});

export interface Fees {
  id: string;
  sid: string;
  pid: string;
  amount: string;
}
