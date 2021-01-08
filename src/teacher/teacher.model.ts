import * as mongoose from 'mongoose';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export const TeacherSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
  },
  id: { type: String},
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String },
  designation: { type: String},
  joiningdate: { type: String },
  gender: { type: String},
  jobrole: { type: String},
  salary: { type: String },
  password: { type: String, required: true },
  role: { type: String },
});

export interface Teacher {
  school:string;
  id: string;
  name: string;
  designation: string;
  department: string;
  salary: string;
  email: string;
  role: string;
  password:string;
}
export class CredentialsDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}