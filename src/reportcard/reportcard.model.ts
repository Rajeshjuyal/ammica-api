import * as mongoose from 'mongoose';
export const ReportcardSchema = new mongoose.Schema({
  student_id: { type: String, required: true },
  subject_id: { type: String, required: true },
  total_marks: { type: String, required: true },
  test_id: { type: String, required: true },
});

export interface Reportcard {
  student_id: 'string';
  subject_id: 'string';
  total_marks: 'string';
  test_id: 'string';
}
