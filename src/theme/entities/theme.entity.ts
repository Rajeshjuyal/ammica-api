import * as mongoose from 'mongoose';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const ThemeSchema = new mongoose.Schema({
    primarycolor: { type: String, required: true },
    secondarycolor: { type: String, required: true },
    logo: { type: String },
    name: { type: String},
    active: {type: Boolean, default: false},
  });
  
  export interface Theme {
      primarycolor: string;
      secondarycolor: string;
      logo: string;
      name:string;
      active:boolean;
  }