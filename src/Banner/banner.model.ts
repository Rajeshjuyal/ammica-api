import * as mongoose from 'mongoose';
import {IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsUrl} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export const BannerSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    bannerType: {
        type: String
    },
    imageURL: {
        type: String
    },
    imageId: {
        type: String
    },
    filePath:{
        type: String
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    status: {
        type: Number,
        default: 1
    }
}, {timestamps: true});

export enum BannerType {
    School = 'School',
    Own = 'Own'
}

export class BannerDTO {
    @IsOptional()
    @IsMongoId()
    _id: string;

    @IsNotEmpty()
    @ApiModelProperty()
    title: string;

    @IsNotEmpty()
    @ApiModelProperty()
    description: string;

    @IsNotEmpty()
    @IsEnum(BannerType)
    @ApiModelProperty()
    bannerType: string;

    @IsNotEmpty()
    @IsUrl()
    @ApiModelProperty()
    imageURL: string;

    @IsNotEmpty()
    @ApiModelProperty()
    imageId: string;

    @IsNotEmpty()
    @ApiModelProperty()
    filePath: string;

    @IsOptional()
    @IsMongoId()
    @ApiModelProperty()
    school: string;

    @IsOptional()
    @ApiModelProperty()
    status:number;
}
