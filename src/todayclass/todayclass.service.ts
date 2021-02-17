import { Injectable } from '@nestjs/common';
import { Todayclass } from './todayclass.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodayclassService {
  todayclasses: Todayclass[] = [];
  constructor(
    @InjectModel('Todayclass') private readonly todayclassModel: Model<any>,
  ) {}
  public async create(classdata: Todayclass) {
    var todayclass1 = await this.todayclassModel.create(classdata);
    console.log(todayclass1);
    return todayclass1;
  }

  public async findAll() {
    var todayclasses = await this.todayclassModel.find();
    return [...todayclasses];
  }

  public async findOne(id: string) {
    var todayclasses = await this.todayclassModel.findById(id);
    return todayclasses;
  }

  public async update(id: string, classdata: Todayclass) {
    var todayclasses = await this.todayclassModel.findByIdAndUpdate(
      id,
      classdata,
    );
    return todayclasses;
  }

  public async remove(id: string) {
    var todayclasses = await this.todayclassModel.findByIdAndDelete(id);
    return todayclasses;
  }
}
