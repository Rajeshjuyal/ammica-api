import {Injectable, HttpStatus, Catch, BadRequestException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import {UploadService} from '../upload/upload.service';
import {AuthService} from '../utils/auth.service';
import * as uuid from 'uuid/v1';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel('Staff') private readonly staffModel: Model<any>,
    private authService: AuthService,
    private utilService: UploadService,
  ){}
  public async create(staffData: CreateStaffDto) {
    if ( staffData.role === 'Admin' || staffData.role === 'Teacher'|| staffData.role === 'Accountant' || staffData.role === 'Librarian' || staffData.role === 'Receptionist') {
      staffData.email=staffData.email.toLowerCase();
      const check = await this.staffModel.findOne({email: staffData.email});
      if (check) {
          console.log("Staff exists")
          return {response_code: HttpStatus.UNAUTHORIZED, response_data: `Staff with email ${staffData.email} is already registered`};
      }
      if (staffData.role === 'Admin') {
          const checkIfAdminExist = await this.staffModel.findOne({role: 'Admin'});
          if (checkIfAdminExist) {
              return {
                  response_code: HttpStatus.BAD_REQUEST,
                  response_data: 'An admin account exist.',
              };
          }
      }
      const {salt, hashedPassword} = await this.authService.hashPassword(staffData.password);
      console.log("Getting created")
      staffData.salt = salt;
      staffData.password = hashedPassword;
      staffData.registrationDate = Date.now();
      staffData.emailVerified = true
      const verificationId = uuid();
      staffData.verificationId = verificationId;
      const response = await this.staffModel.create(staffData);
      console.log("CReated")
      if (response._id) {
          const {body, subject, htmlData} = this.getEmailVerificationFields(verificationId);
          const emailRes = await this.utilService.sendEmail(staffData.email, subject, body, htmlData);
          console.log(emailRes)
          if (emailRes && emailRes.length > 0) {
              return {
                response_code: HttpStatus.CREATED,
                  response_data:'Account created successfully. A confirmation is sent through email',
              };
          } else {
              return {
                  response_code: HttpStatus.CREATED,
                  response_data: {message: 'Account created successfully'},
              };
          }
      }
  } else {
      return {
          response_code: HttpStatus.BAD_REQUEST,
          response_data: 'Role Should be Admin Or Teacher or Accountant or Librarian or Receptionist'
      };
  }
  }

  public async findAllTeachers() {
    const teachers = await this.staffModel.find({role: 'Teacher'});
    const teacherCount = await this.staffModel.countDocuments({role: 'Teacher'});
    return {
        response_code: HttpStatus.OK,
        response_data: {teachers, teacherCount}
    };
  }
  
  public async findAll(){
    const resdata = await this.staffModel.find();
        return {
            response_code: HttpStatus.OK,
            response_data: resdata,
        };
  }

  public async findOne(id: number) {
    const staffInfo = await this.staffModel.findById(id, '-password -salt');
    if (staffInfo) {
        return {
            response_code: HttpStatus.OK,
            response_data: {staffInfo}
        };
    } else {
        return {
            response_code: HttpStatus.UNAUTHORIZED,
            response_data: 'staff not found',
        };
    }
  }

  public async update(id: number, updateStaffData: UpdateStaffDto) {
    const res = await this.staffModel.findByIdAndUpdate(id, updateStaffData);
        return {
            response_code: HttpStatus.OK,
            response_data: 'Profile updated successfully',
        };
  }

  public async remove(staff: CreateStaffDto,id: number) {
    if (staff.role !== 'Admin') {
      return {response_code: HttpStatus.UNAUTHORIZED, response_data: 'Sorry !!, you are not allowed to access this api',};
  }
  try {
      const orders = await this.orderModel.find({assignedTo: id});
      // if (orders.length > 0) {
      //     return {
      //         response_code: HttpStatus.BAD_REQUEST,
      //         response_data: `Cannot delete this delivery boy because he has ${orders.length} orders assigned.`
      //     };
      // } else {
          const res = await this.staffModel.findByIdAndDelete(id);
          return {response_code: HttpStatus.OK, response_data: 'Staff deleted successfully'};
      //}
  } catch (e) {
      return {response_code: HttpStatus.BAD_REQUEST, response_data: 'Could not delete this Staff Member.'};
  }
  }

  // get email verification fields
  private getEmailVerificationFields(verificationId: string) {
    console.log("MAIL CALLED !");
    const body: string =
        'Your Account has been successfully registered';
    const subject: string = 'Account created';
    let htmlData: string = '';
    console.log("MAIL CREATED !");
    if (process.env.NODE_ENV === 'production') {
        htmlData = `<p>${body}</p>`;
    } else {
        htmlData = `<p>${body}</p>`;
    }
    console.log("MAIL RETURN !");
    return {body, subject, htmlData};
}

}
