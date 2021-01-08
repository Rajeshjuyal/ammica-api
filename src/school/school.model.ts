import * as mongoose from 'mongoose';
export const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String },
  board: { type: String, required: true },
  totalstudent: { type: Number},
});
export interface School {
  logo: string;
  name: string;
  location: string;
  board: string;
  totalstudent: number;
}