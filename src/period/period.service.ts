import { Injectable, HttpStatus } from '@nestjs/common';
import { Period } from './period.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PeriodService {
  periods: Period[] = [];
  constructor(
    @InjectModel('Period') private readonly periodModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>,
  ) {}
  public async create(data: Period) {
    var period1 = await this.periodModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: period1,
    };
  }

  public async findAll() {
    var period2 = await this.periodModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: period2,
    };
  }

  public async findOne(id: string) {
    var period3 = await this.periodModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: period3,
    };
  }
  public async findSubject(id: string) {
    var period4 = await this.periodModel.find({ subject: id });
    return {
      response_code: HttpStatus.OK,
      response_data: period4,
    };
  }
  public async findtime_table(id: string) {
    var period5 = await this.periodModel.find({ time_table: id });
    return {
      response_code: HttpStatus.OK,
      response_data: period5,
    };
  }
  public async findSection(id: string) {
    var period6 = await this.periodModel.find({ section: id });
    return {
      response_code: HttpStatus.OK,
      response_data: period6,
    };
  }

  public async teacherPeriod(id: string) {
    var periods = await this.periodModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: periods,
    };
  }

  public async update(id: string, data: Period) {
    var period4 = await this.periodModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: period4,
    };
  }

  public async remove(id: string) {
    var period5 = await this.periodModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: period5,
    };
  }
}
