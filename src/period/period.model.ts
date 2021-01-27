import * as mongoose from 'mongoose';
export const PeriodSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  time_table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'time_table',
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: { type: String, required: true },

  starttime: { type: String, required: true },

  Day: { type: String, required: true },
});
export interface Period {
  name: string;

  starttime: string;

  Day: string;
}
