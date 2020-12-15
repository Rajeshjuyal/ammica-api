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

export const StaffSchema = new mongoose.Schema(
  {
    staffId: { type: String },
    firstName: {type: String,},
    lastName: {type: String,},
    fatherName: {type: String,},
    motherName: {type: String,},
    email: {
      type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    gender: {type: String,},
    designation: {type: String,},
    department: {type: String,},
    dob: { type: String },
    doj: { type: String },

    password: {
      type: String,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    profilePicId: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    otp: {
      type: Number,
    },
    playerId:{
      type:String
    },
    mobileNumberverified: {
      type: Boolean,
    },
    emailVerified: {
      type: Boolean,
    },
    verificationId: {
      type: String,
    },
    filePath:{
     type:String
    },
    registrationDate: {
      type: Number,
    },
    fcmToken: {
      type: String,
    },
    status: {
      type: Boolean,
      default:true
    },
    // only for admin
    exportedFile: {
      type: Object,
    },

  },
  
  { timestamps: true },
);


//only These role should be created
enum RoleType {
  Teacher= 'Teacher',
  Admin='Admin',
  Accountant='Accountant',
  Librarian='Librarian',
  Receptionist='Receptionist',
  //Manager='Manager'
}

enum DesignationType {
    User = 'User',
    Teacher= 'Teacher',
    Admin='Admin',
    Accountant='Accountant',
    Librarian='Librarian',
    Receptionist='Receptionist',
    Faculty='Faculty',
    Principal='Principal',
    Director='Director'
  }

  enum DepartmentType {
    Academic = 'Academic',
    Library= 'Library',
    Sports='Sports',
    Science='Science',
    Commerce='Commerce',
    Arts='Arts',
    Exam='Exam',
    Admin='Admin',
    Finance='Finance'
  }
  enum GenderType {
    Male = 'Male',
    Female = 'Female',
    notDefined = 'notDefined'
  }


export class StaffDTO {
  @IsEmpty()
  _id: string;

  @IsOptional()
  @ApiModelProperty()
  firstName: string;

  @IsOptional()
  @ApiModelProperty()
  lastName: string;

  @IsOptional()
  @ApiModelProperty()
  fatherName: string;

  @IsOptional()
  @ApiModelProperty()
  motherName: string;

  @IsNotEmpty()
  @IsEnum(GenderType, {message: 'Gender type should be Male or Female or Not Defined'})
  @ApiModelProperty()
  gender: string;

  @IsNotEmpty()
  @IsEnum(DesignationType, {message: 'Designation type should be Male or Female or Not Defined'})
  @ApiModelProperty()
  designation: string;

  @IsNotEmpty()
  @IsEnum(DepartmentType, {message: 'Department type should be Male or Female or Not Defined'})
  @ApiModelProperty()
  department: string;

  @IsOptional()
  @ApiModelProperty()
  dob: string;

  @IsOptional()
  @ApiModelProperty()
  doj: string;

  @IsNotEmpty()
  @ApiModelProperty()
  email: string;

  @IsNotEmpty()
  @Length(6, 12)
  @ApiModelProperty()
  password: string;

  @IsOptional()
  @Length(0, 15)
  @ApiModelProperty()
  mobileNumber: string;

  @IsEmpty()
  salt: string;
  
  @IsOptional()
  @ApiModelProperty()
  filePath:string

  @IsOptional()
  playerId:String

  @IsNotEmpty()
  @IsEnum(RoleType, {message: 'Role  type should be User or Admin or DeliveryBoy'})
  @ApiModelProperty()
  role: string;


  @IsOptional()
  otp: number;

  @IsOptional()
  @IsUrl()
  @ApiModelProperty()
  profilePic: string;

  @IsOptional()
  @ApiModelProperty()
  profilePicId: string;

  @IsOptional()
  registrationDate: number;

  @IsOptional()
  emailVerified: boolean;

  @IsOptional()
  mobileNumberverified: boolean;

  @IsOptional()
  verificationId: string;
  fcmToken: string;
  status:boolean
}

export class StaffUpdateDTO {
  @IsOptional()
  _id: string;

  @IsOptional()
  @ApiModelProperty()
  firstName: string;

  @IsOptional()
  @ApiModelProperty()
  lastName: string;

  @IsOptional()
  @Length(0, 15)
  @ApiModelProperty()
  mobileNumber: string;


  @IsOptional()
  otp: number;

  @IsOptional()
  @IsUrl()
  @ApiModelProperty()
  profilePic: string;

  @IsOptional()
  @ApiModelProperty()
  profilePicId: string;

  @IsOptional()
  @ApiModelProperty()
  filePath:string

  @IsOptional()
  registrationDate: number;

  @IsOptional()
  emailVerified: boolean;

  @IsOptional()
  mobileNumberverified: boolean;

  @IsOptional()
  verificationId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CoOridnatesDTO)
  @ApiModelProperty()
  location: CoOridnatesDTO;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiModelProperty()
  freeDeliveryDistance: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiModelProperty()
  deliveryCharge: number;

  @IsOptional()
  @ApiModelProperty()
  deliveryDistanceUnit: string;

  @IsOptional()
  @IsNumber()
  @ApiModelProperty()
  tax: number;

  @IsOptional()
  @ApiModelProperty()
  fcmToken: string;
 
  @IsOptional()
  @ApiModelProperty()
  playerId:string
  status:boolean
 
}

export class CredentialsDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty()
  email: string;
  
  @IsOptional()
  playerId:string

  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
}
// mobile No. login credentails
export class CredentialsMobileDTO {
  @IsNotEmpty()
  @Length(0,15)
  @ApiModelProperty()
  mobileNumber:number

  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
}
export class UploadFileDTO {
  @ApiModelProperty()
  type: string;
}

export class DeleteFileDTO {
  fileId:string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  key: string;
}
//delete imgeKit uploded file
export class ImageKitdDeleteDTO{
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  fileId:string
}
export class VerifyEmailDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty()
  email: string;
}

export class OTPVerificationDTO {
  @IsNotEmpty()
  @Length(4, 4)
  @ApiModelProperty()
  otp: string;
}

export class PasswordResetDTO {
  @IsNotEmpty()
  @Length(6, 12)
  @ApiModelProperty()
  password: string;
}

export class ChangePasswordDTO {
  @IsNotEmpty()
  @ApiModelProperty()
  currentPassword: string;

  @IsNotEmpty()
  @ApiModelProperty()
  newPassword: string;

  @IsNotEmpty()
  @ApiModelProperty()
  confirmPassword: string;
}

export class DeviceTokenDTO {
  @IsNotEmpty()
  @ApiModelProperty()
  fcmToken: string;
}

export class MobileDTO {
  @IsNotEmpty()
  @Length(0,15)
  @ApiModelProperty()
  mobileNumber: string;
}


//only for admin
export class ExportedFileDTO{
  @ApiModelProperty()
  exportedFile:object
}
export class PushNotificationDTO{
  @ApiModelProperty()
  @IsNotEmpty()
  title:string
  @ApiModelProperty()
  @IsNotEmpty()
  mssg:String;
  couponecode:string
  
}
