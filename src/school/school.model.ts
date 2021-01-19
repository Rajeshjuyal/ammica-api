import * as mongoose from 'mongoose';
export const SchoolSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  board: { type: String, required: true },
  totalstudent: { type: String, required: true },
  contact_no: { type: String, required: true },
});
export interface School {
  user: string;
  id: string;
  logo: string;
  name: string;
  location: string;
  board: string;
  branch: string;
  totalstudent: string;
  contact_no: string;
}
