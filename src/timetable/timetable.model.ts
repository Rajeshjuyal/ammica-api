import * as mongoose from 'mongoose';
export const TimetableSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true,
  },

  day: { type: String, required: true },

  duration_of_one_period: { type: String, required: true },
});

export interface Timetable {
  school: string;
  section: string;
  day: string;

  duration_of_one_period: string;
}
