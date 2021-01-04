import * as mongoose from 'mongoose';
export const TimetableSchema = new mongoose.Schema({
  tt_day: { type: String, required: true },
  tt_subject: { type: String, required: true },
  tt_teacherid: { type: String, required: true },
  tt_period1: { type: String, required: true },
  tt_period2: { type: String, required: true },
  tt_period3: { type: String, required: true },
  tt_period4: { type: String, required: true },
  tt_period5: { type: String, required: true },
  tt_period6: { type: String, required: true },
});

export interface Timetable {
  tt_day: string;
  tt_period1: string;
  tt_period2: string;
  tt_period3: string;
  tt_period4: string;
  tt_period5: string;
  tt_period6: string;
  tt_period7: string;
}
