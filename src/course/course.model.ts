import * as mongoose from 'mongoose';
export const CourseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  tid: { type: Number, required: true },
  sid: { type: String, required: true },
});

export interface Course {
  id: string;
  name: string;
  tid: string;
  sid: string;
}
