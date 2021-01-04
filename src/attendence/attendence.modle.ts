import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  date: { type: String, required: true },
  teacherid: { type: String, required: true },
  studentid: { type: String, required: true },
  periodno: { type: String, required: true },
  subjectid: { type: String, required: true },
});

export interface Attendence {
  id: string;
  date: string;
  teacherid: string;
  studentid: string;
  periodno: string;
  subjectid: string;
}
