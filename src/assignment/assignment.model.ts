import * as mongoose from 'mongoose';
export const AssignmentSchema = new mongoose.Schema({
  studentid: { type: String, required: true },
  teacherid: { type: Number, required: true },
  marks: { type: String, required: true },
});

export interface Assignment {
  studentid: string;
  teacherid: number;
  marks: string;
}
