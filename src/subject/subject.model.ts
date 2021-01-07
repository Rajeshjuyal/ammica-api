  
import * as mongoose from 'mongoose';
export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  department: { type: String, required: true },
  studentcode: { type: String, required: true },
});

export interface Subject {
  id: string;
  name: string;
  department: string;
  studentcode: string;
}