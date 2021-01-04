import * as mongoose from 'mongoose';
export const ClassSchema = new mongoose.Schema({
  studentid: { type: String, required: true },
  teacherid: { type: Number, required: true },
  marks: { type: String, required: true },
});

export interface Class {
  (name: 'string', no_of_student: 'string');
}
