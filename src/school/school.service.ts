import { Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { School } from './school.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SchoolService {
  schools: School[] = [];
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>,
  ) {}

  public async create(schooldata: School) {
    var school = await this.schoolModel.create(schooldata);
    console.log(school);
    return {
      response_code: HttpStatus.OK,
      response_data: school,
    };
  }

  public async findAll() {
    var schools = await this.schoolModel.find().populate('user');
    return {
      response_code: HttpStatus.OK,
      response_data: schools,
    };
  }

  public async findOne(id: string) {
    var schools = await this.schoolModel.findById(id);
    return schools;
  }
  public async findUser(id: string) {
    var school = await this.userModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: school,
    };
  }

  public async update(id: string, schooldata: School) {
    var school = await this.schoolModel.findByIdAndUpdate(id, schooldata);
    return {
      response_code: HttpStatus.OK,
      response_data: school,
    };
  }

  public async remove(id: string) {
    var schools = await this.schoolModel.findByIdAndDelete(id);
    schools.remove;
    return {
      response_code: HttpStatus.OK,
      response_data: "School Removed",
    };
  }
}
