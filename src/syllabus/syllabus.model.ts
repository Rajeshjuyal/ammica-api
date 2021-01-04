import * as mongoose from 'mongoose';
export const SyllabusSchema = new mongoose.Schema({
  subject_name: { type: String, required: true },
  subjectcode: { type: String, required: true },
  time: { type: String, required: true },
  marks: { type: String, required: true },
});

export interface Syllabus {
  subject_name: string;
  subjectcode: string;
  time: string;
  marks: string;
}
