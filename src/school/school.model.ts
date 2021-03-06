import * as mongoose from 'mongoose';
export const SchoolSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
  },
  location: { type: String, required: true },
  board: { type: String, required: true },
  totalstudent: { type: String, required: true },
});
export interface School {
  user: string;
  name: string;
  logo: string;
  imageUrl: string;
  imageId: string;
  filepath: string;
  location: string;
  board: string;
  totalstudent: string;
}
