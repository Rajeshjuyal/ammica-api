import { Injectable } from '@nestjs/common';
import { Assignment } from './assignment.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssignemntService {
  assignments: Assignment[] = [];
  constructor(
    @InjectModel('Assignment') private readonly assignmentModel: Model<any>,
  ) {}
  public async create(assignment: Assignment) {
    var assignment1 = await this.assignmentModel.create(assignment);
    console.log(assignment1);
    return assignment1;
  }

  public async findAll() {
    var assignmentss = await this.assignmentModel.find();
    return [...assignmentss];
  }

  public async findOne(id: string) {
    var assignments = await this.assignmentModel.findById(id);
    return assignments;
  }

  public async update(id: string, assignmentdata: Assignment) {
    var assignments = await this.assignmentModel.findByIdAndUpdate(
      id,
      assignmentdata,
    );
    return assignments;
  }
  public async remove(id: string) {
    var assignmentss = await this.assignmentModel.findByIdAndDelete(id);
    assignmentss.remove();
    return assignmentss;
  }
}
