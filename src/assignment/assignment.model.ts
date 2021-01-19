import * as mongoose from 'mongoose';
export const AssignmentSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: 'true',
  },
  studentid: { type: String, required: true },
  teacherid: { type: String, required: true },
  marks: { type: String, required: true },
  
});

export interface Assignment {
  teacher: string;
  studentid: string;
  teacherid: number;
  marks: string;
}
