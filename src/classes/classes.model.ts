import * as mongoose from 'mongoose';
import { IsNotEmpty, IsOptional, IsUrl, IsMongoId,IsEmpty,IsBoolean, IsNumber, IsPositive, Min, Max } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export const ClassesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  filePath:{
    type: String
  },

  totalStudents: {
      type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  status: {
    type: Number,
    default: 1,
  },
  objectID: {
    type: String,
  },
});

export class ClassesDTO {
  @IsOptional()
  _id: string;

  @IsNotEmpty()
  @ApiModelProperty()
  title: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiModelProperty()
  imageUrl: string;

  @IsOptional()
  @ApiModelProperty()
  imageId: string;

  @IsNotEmpty()
  @ApiModelProperty()
  filePath: string;

  @IsOptional()
  @ApiModelProperty()
  user: string;

  @IsOptional()
  @ApiModelProperty()
  totalStudents: number;

  // @IsNotEmpty()
  @IsOptional()
  @ApiModelProperty()
  status: number;
}

export class ClassesStatusDTO{
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  @ApiModelProperty()
  status: number;
}

