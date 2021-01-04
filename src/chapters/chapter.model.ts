import * as mongoose from 'mongoose';
export const ChaptersSchema = new mongoose.Schema({
  chapter_name: { type: String, required: true },
  topic_id: { type: String, required: true },
  video_url: { type: String, required: true },
});

export interface Chapters {
  chapter_name: string;
  topic_id: string;
  vidoe_url: string;
}
