  
import * as mongoose from 'mongoose';
import {
  IsNotEmpty,
  IsEmail,
  IsEmpty,
  IsUrl,
  IsNumber,
  Length,
  IsOptional,
  IsPositive,
  Min,
  Equals,
  IsArray,
  ValidateNested,
  IsString,
  Max,
  IsEnum,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjectcode: { type: String, required: true },
});

export interface Subject {
  name: string;
  subjectcode: string;
}
export class SubjectDTO{
  _id:string;
 name:string;
 subjectcode:string;
}