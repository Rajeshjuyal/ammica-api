import * as mongoose from 'mongoose';
export const TodayclassSchema = new mongoose.Schema({
  classtime: { type: String, required: true },
  teacherid: { type: String, required: true },
  subjectid: { type: Number, required: true },
  periodname: { type: String, required: true },
});

export interface Todayclass {
  classtime: 'string';
  teacherid: 'string';
  subjectid: 'string';
  periodname: 'string';
}
