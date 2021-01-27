import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date:{type:Date,required:true},
  present:{type:Boolean,required:true}
});

export interface Attendence {
  period: string;
}
