import * as mongoose from 'mongoose';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export const TeacherSchema = new mongoose.Schema({
  t_id: { type: String},
  t_name: { type: String, required: true },
  t_email: { type: String, required: true },
  t_contact: { type: String },
  t_designation: { type: String},
  t_joiningdate: { type: String },
  t_gender: { type: String},
  t_jobrole: { type: String},
  t_salary: { type: String },
  t_password: { type: String, required: true },
  role: { type: String },
});

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  email: string;
  role: string;
}
export class CredentialsDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}