import * as mongoose from 'mongoose';
export const ChaptersSchema = new mongoose.Schema({
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: 'true',
  },
  name: { type: String, required: true },
  duration: { type: String, required: true },
});

export interface Chapters {
  unit: string;
  name: string;
  duration: string;
}