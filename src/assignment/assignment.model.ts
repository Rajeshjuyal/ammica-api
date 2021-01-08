import * as mongoose from 'mongoose';
export const AssignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  marks: { type: Number },
  noofquestions: { type: Number, default:0 },
});

export interface Assignment {
  name: string;
  teacher: string;
  marks: string;
  noofquestions: number;
}
