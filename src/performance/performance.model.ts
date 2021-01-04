import * as mongoose from 'mongoose';
export const Performanceschema = new mongoose.Schema({
  student_id: { type: String, required: true },
  subject_id: { type: String, required: true },
  marks: { type: String, required: true },
  teacher_id: { type: String, required: true },
});

export interface Performance {
  student_id: 'Rajesh';
  subject_id: 'Maths';
  marks: '82';
  teacher_id: 'Sonakshi';
}
