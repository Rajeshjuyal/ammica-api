import { Injectable, HttpStatus } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'aws-sdk';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [];
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>,
    @InjectModel('School') private readonly schoolModel: Model<any>,
    @InjectModel('Period') private readonly periodModel: Model<any>,
  ) {}
  public async create(data: Teacher) {
    var teacher1 = await this.teacherModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: teacher1,
    };
  }

  public async findAll() {
    var teacher2 = await this.teacherModel.find();

    return {
      response_code: HttpStatus.OK,
      response_data: teacher2,
    };
  }
  public async TodayClasses(id: string, day: string) {
    var user = await this.userModel.findById(id);
    var teacher = await this.teacherModel.find({ user: user.id });
    var periods=await this.periodModel.find(Service)
  }

  public async findOne(id: string) {
    var teacher3 = await this.teacherModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: teacher3,
    };
  }
  public async findUser(id: string) {
    var teacher5 = await this.teacherModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: teacher5,
    };
  }
  public async findSchool(id: string) {
    var teacher6 = await this.teacherModel.find({ school: id });
    return {
      response_code: HttpStatus.OK,
      response_data: teacher6,
    };
  }

  public async update(id: string, data: Teacher) {
    var teacher4 = await this.teacherModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: teacher4,
    };
  }

  public async remove(id: string) {
    var teacher4 = await this.teacherModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: teacher4,
    };
  }
}
