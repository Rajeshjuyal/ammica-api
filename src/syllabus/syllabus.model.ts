import * as mongoose from 'mongoose';
export const SyllabusSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  time: { type: String, required: true },

  board: { type: String, required: true },
});

export interface Syllabus {
  subject: string;
  time: string;
  board: string;
}
export class SyllabusDto {
  _id: string;
  subject: string;
  time: string;
  board: string;
}
