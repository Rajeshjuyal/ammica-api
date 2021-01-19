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
    var school1 = await this.schoolModel.create(schooldata);
    console.log(school1);
    return school1;
  }

  public async findAll() {
    var schools = await this.schoolModel.find();
    return [...schools];
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
    var schools = await this.schoolModel.findByIdAndUpdate(id, schooldata);
    return schools;
  }

  public async remove(id: string) {
    var schools = await this.schoolModel.findByIdAndDelete(id);
    schools.remove;
    return schools;
  }
}
