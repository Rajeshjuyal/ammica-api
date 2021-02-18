import * as mongoose from 'mongoose';
export const SubmissionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'test', req: true },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student',
    required: true,
  },
  score: { type: String, required: true },
  total: { type: String, required: true },
});
export interface Submission {
  test: string;
  student: string;
  score: string;
  total: string;
}
