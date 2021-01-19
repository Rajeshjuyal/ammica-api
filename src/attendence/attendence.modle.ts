import * as mongoose from 'mongoose';
export const AttendanceSchema = new mongoose.Schema({
  Period: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Period',
    required: true,
  },
  present:{type:Boolean,required:true}
});

export interface Attendence {
  period: string;
}
