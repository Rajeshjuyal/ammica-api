import * as mongoose from 'mongoose';
export const UnitSchema = new mongoose.Schema({
  syllabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Syllabus',
    required: 'true',
  },
  id: { type: String, required: true },
  name: { type: String, required: true },

  duration: { type: String, required: true },
});

export interface Unit {
  syllabus: mongoose.Schema.Types.ObjectId;
  id: string;
  name: string;
  duration: string;
}