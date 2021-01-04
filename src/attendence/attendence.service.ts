import { Injectable } from '@nestjs/common';
import { Attendence } from './attendence.modle';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AttendenceService {
  attendences: Attendence[] = [];
  constructor(
    @InjectModel('Attendance') private readonly attendanceModel: Model<any>,
  ) {}
  public async create(attendence: Attendence) {
    console.log('In function');
    var attendence1 = await this.attendanceModel.create(attendence);
    console.log(attendence1);
    return attendence1;
  }

  public async findAll() {
    var attendences = await this.attendanceModel.find();
    return [...attendences];
  }

  public async findOne(id: string) {
    var attendence = await this.attendanceModel.findById(id);
    return attendence;
  }

  public async update(id: string, attendencedata: Attendence) {
    var attendence = await this.attendanceModel.findByIdAndUpdate(
      id,
      attendencedata,
    );
    return attendence;
  }

  public async remove(id: string) {
    var attendence = await this.attendanceModel.findByIdAndDelete(id);
    attendence.remove();
    return attendence;
  }
}
