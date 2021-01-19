import * as mongoose from 'mongoose';
import { Subject } from 'rxjs';
export const AssignedSubjectSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
});
export interface AssignedSubject {
  subject: string;
  class: string;
  teacher: string;
}
