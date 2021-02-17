import * as mongoose from 'mongoose';
export const TeacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
     required: true },
    school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
});
export interface Teacher {
  user: string;
  school: string;
}
