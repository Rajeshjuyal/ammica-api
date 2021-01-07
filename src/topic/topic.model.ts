import * as mongoose from 'mongoose';
export const TopicSchema = new mongoose.Schema({
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chapter',
    required: 'true',
  },
  name: { type: String, required: true },
  videourl: { type: String, required: true },
  Pdf: { type: String, required: true },
});

export interface Topic {
  chapter: string;
  name: string;
  videourl: string;
  pdf:string;
}