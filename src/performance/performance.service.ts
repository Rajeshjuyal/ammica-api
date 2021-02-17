import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Performance } from './performance.model';
import { from } from 'rxjs';

@Injectable()
export class PerformanceService {
  performancess: [] = [];
  constructor(
    @InjectModel('Performance') private readonly performanceModel: Model<any>,
  ) {}
  public async create(performancedata: Performance) {
    var performance1 = await this.performanceModel.create(performancedata);
    console.log(performance1);
    return performance1;
  }

  public async findAll() {
    var performance = await this.performanceModel.find();
    return performance;
  }

  public async findOne(id: string) {
    var performance = await this.performanceModel.findById(id);
    return performance;
  }

  public async update(id: string, performancedata: Performance) {
    var performance = await this.performanceModel.findByIdAndUpdate(
      id,
      performancedata,
    );
    return performance;
  }

  public async remove(id: string) {
    var performance = await this.performanceModel.findByIdAndDelete(id);
    performance.remove();
    return performance;
  }
}
