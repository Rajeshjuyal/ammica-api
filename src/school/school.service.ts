import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { School } from './school.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<any>,
  ) {}

  public async create(schooldata: School) {
    var school1 = await this.schoolModel.create(schooldata);
    console.log(school1);
    return school1;
  }

  public async findAll() {
    var schools = await this.schoolModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: schools
    };
  }

  public async findOne(id: string) {
    var schools = await this.schoolModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: schools
    };
  }

  public async update(id: string, schooldata: School) {
    var schools = await this.schoolModel.findByIdAndUpdate(id, schooldata);
    return {
      response_code: HttpStatus.OK,
      response_data: schools
    };
  }

  public async remove(id: string) {
    var schools = await this.schoolModel.findByIdAndDelete(id);
    schools.remove;
    return {
      response_code: HttpStatus.OK,
      response_data: 'school removed'
    };
  }
}
