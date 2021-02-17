import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Timetable } from './timetable.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TimetableService {
  timetables: Timetable[] = [];
  constructor(
    @InjectModel('Timetable') private readonly timetableModel: Model<any>,
    @InjectModel('School') private readonly schoolModel: Model<any>,
    @InjectModel('Section') private readonly sectionModel: Model<any>,
  ) {}
  public async create(data: Timetable) {
    var timetable1 = await this.timetableModel.create(data);

    return {
      response_code: HttpStatus.OK,
      response_data: timetable1,
    };
  }

  public async findAll() {
    var timetables = await this.timetableModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: timetables,
    };
  }

  public async findOne(id: string) {
    var timetable = await this.timetableModel.findById(id);

    return {
      response_code: HttpStatus.OK,
      response_data: timetable,
    };
  }
  public async findSchool(id: string) {
    var timetable = await this.timetableModel.find({ school: id });
  }
  public async findSection(id: string) {
    var timetable = await this.timetableModel.find({ section: id });
    return {
      response_code: HttpStatus.OK,
      response_data: timetable,
    };
  }

  public async update(id: string, timetabledata: Timetable) {
    var timetable = await this.timetableModel.findByIdAndUpdate(
      id,
      timetabledata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: timetable,
    };
  }

  public async remove(id: string) {
    var timetable = await this.timetableModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: timetable,
    };
  }
}
