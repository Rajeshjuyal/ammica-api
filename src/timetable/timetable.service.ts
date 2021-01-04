import { Injectable, Inject } from '@nestjs/common';
import { Timetable } from './timetable.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TimetableService {
  timetables: Timetable[] = [];
  constructor(
    @InjectModel('Timetable') private readonly teacherModel: Model<any>,
  ) {}
  public async create(timetable: Timetable) {
    var timetable1 = await this.teacherModel.create(timetable);
    console.log(timetable1);
    return timetable1;
  }

  public async findAll() {
    var timetables = await this.teacherModel.find();
    return [...timetables];
  }

  public async findOne(id: string) {
    var timetable = await this.teacherModel.findById(id);

    return timetable;
  }

  public async update(id: string, timetabledata: Timetable) {
    var timetable = await this.teacherModel.findByIdAndUpdate(
      id,
      timetabledata,
    );
    return timetable;
  }

  public async remove(id: string) {
    var timetable = await this.teacherModel.findByIdAndDelete(id);
    return timetable;
  }
}
