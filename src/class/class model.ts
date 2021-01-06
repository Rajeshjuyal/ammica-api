import * as mongoose from 'mongoose';
export const ClassSchema = new mongoose.Schema({
  day: { type: String, required: true },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  time: { type: String, required: true },
});

export interface Class {
  (day: 'string', no_of_student: 'string');
}