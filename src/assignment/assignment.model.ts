import * as mongoose from 'mongoose';
export const AssignmentSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: 'true',
  },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'class', required: true },
  marks: { type: String, required: true },
});

export interface Assignment {
  teacher: string;
  class: string;
  marks: string;
}
