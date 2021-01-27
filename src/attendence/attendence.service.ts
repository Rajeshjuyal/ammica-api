import { Injectable, HttpStatus } from '@nestjs/common';
import { Attendence } from './attendence.modle';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AttendenceService {
  attendences: Attendence[] = [];
  constructor(
    @InjectModel('Attendance') private readonly attendanceModel: Model<any>,

    @InjectModel('User') private readonly userModel: Model<any>,
  ) {}
  public async create(attendence: Attendence) {
    console.log('In function');
    var attendence1 = await this.attendanceModel.create(attendence);
    return {
      response_code: HttpStatus.OK,
      response_data: attendence1,
    };
  }

  public async findAll() {
    var attendences = await this.attendanceModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: attendences,
    };
  }

  public async findOne(id: string) {
    var attendence = await this.attendanceModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: attendence,
    };
  }
  public async findPeriod(id: string) {
    var attendence = await this.attendanceModel.find({ period: id });
    return {
      response_code: HttpStatus.OK,
      response_data: attendence,
    };
  }

  public async update(id: string, attendencedata: Attendence) {
    var attendence = await this.attendanceModel.findByIdAndUpdate(
      id,
      attendencedata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: attendence,
    };
  }

  public async remove(id: string) {
    var attendence = await this.attendanceModel.findByIdAndDelete(id);
    attendence.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: attendence,
    };
  }
}
