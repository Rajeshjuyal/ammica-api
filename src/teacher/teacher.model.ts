import * as mongoose from 'mongoose';
export const TeacherSchema = new mongoose.Schema({
  t_id: { type: String, required: true },
  t_name: { type: String, required: true },
  t_email: { type: String, required: true },
  t_contact: { type: String, required: true },
  t_designation: { type: String, required: true },
  t_joiningdate: { type: String, required: true },
  t_gender: { type: String, required: true },
  t_jobrole: { type: String, required: true },
  t_salary: { type: String, required: true },
});

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  vid: string;
}
