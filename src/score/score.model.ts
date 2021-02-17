import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  marks: { type: String, required: true },
  subjectid: { type: String, required: true },
});

export interface Score {
  id: string;
  name: string;
  marks: string;
  subjectid: string;
}
