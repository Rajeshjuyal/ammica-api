import * as mongoose from 'mongoose';
export const TopicSchema = new mongoose.Schema({
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chapter',
    required: 'true',
  },
  id: { type: String, required: true },
  name: { type: String, required: true },
  videourl: { type: String, required: true },
  Pdf: { type: String, required: true },
});

export interface Topic {
  chapter: string;
  id: string;
  name: string;
  videourl: string;
  pdf: string;
}
