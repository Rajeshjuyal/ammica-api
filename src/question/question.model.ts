import * as mongooose from 'mongoose';
export const QuestionSchema = new mongooose.Schema({
  test: {
    type: mongooose.Schema.Types.ObjectId,
    ref: 'test',
    required: true,
  },
  questions: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  answer: { type: String, required: true },
  questionno: { type: String, required: true },
});

export interface Question {
  test: string;
  questions: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  questionno: string;
}
