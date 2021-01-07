import * as mongoose from 'mongoose';
export const SyllabusSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  subjectcode: { type: String, required: true },
  time: { type: String, required: true },
  marks: { type: String, required: true },
  board:{type:String,required:true},
});

export interface Syllabus {
  subject: mongoose.Schema.Types.ObjectId ;
  subjectcode: string;
  time: string;
  marks: string;
}