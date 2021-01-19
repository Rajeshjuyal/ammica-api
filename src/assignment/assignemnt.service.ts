import { Injectable, HttpStatus, assignMetadata } from '@nestjs/common';
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
    return {
      response_code: HttpStatus.OK,
      response_data: assignment,
    };
  }

  public async findAll() {
    var assignmentss = await this.assignmentModel.find();
    return {
      response_code: HttpStatus,
      response_data: assignmentss,
    };
  }

  public async findOne(id: string) {
    var assignments = await this.assignmentModel.findById(id);
    return {
      response_code: HttpStatus,
      response_data: assignments,
    };
  }
  public async findSchool(id: string) {
    var assignment = await this.assignmentModel.find({ school: id });
    return {
      response_code: HttpStatus,
      response_data: assignment,
    };
  }

  public async update(id: string, assignmentdata: Assignment) {
    var assignments = await this.assignmentModel.findByIdAndUpdate(
      id,
      assignmentdata,
    );
    return {
      response_code: HttpStatus,
      response_data: assignments,
    };
  }
  public async remove(id: string) {
    var assignmentss = await this.assignmentModel.findByIdAndDelete(id);
    assignmentss.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: 'Assignment Successfully deleted',
    };
  }
}
