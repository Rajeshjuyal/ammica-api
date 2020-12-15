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


enum RoleType {
    User = 'User',
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


export class UpdateStaffDto{
    @IsOptional()
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
    @ApiModelProperty()
    fcmToken: string;
   
    @IsOptional()
    @ApiModelProperty()
    playerId:string
    status:boolean
   
  }