  
import * as mongoose from 'mongoose';
export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjectcode: { type: String, required: true },
});

export interface Subject {
  name: string;
  subjectcode: string;
}