import * as mongoose from 'mongoose';
export const AssignmentQuestionSchema = new mongoose.Schema({
  Assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true,
  },
  id: { type: 'String', required: 'true' },
  Question_Name: { type: 'String', required: 'true' },
});
export interface AssignmentQuestion {
  Assignment: string;
  id: string;
  Question_Name: string;
}
