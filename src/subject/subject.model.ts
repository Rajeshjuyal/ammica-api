import * as mongoose from 'mongoose';
export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

export interface Subject {
  name: string;
  code: string;
}
export class SubjectDTO{
  
  name:string;
  subjectcode:string;
  _id:string;
}
