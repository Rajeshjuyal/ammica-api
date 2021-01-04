import * as mongoose from 'mongoose';
export const TestSchema = new mongoose.Schema({
  testid: { type: String, required: true },
  subjectid: { type: String, required: true },
  time: { type: String, required: true },
  marks: { type: String, required: true },
  obtained_marks: { type: String, required: true },
});

export interface Test {
  testid: string;
  subjectid: string;
  time: string;
  marks: string;
}
