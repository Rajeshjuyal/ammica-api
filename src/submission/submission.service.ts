import { Injectable, HttpStatus } from '@nestjs/common';
import { Submission } from './submission.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubmissionService {
  Submissions: Submission[] = [];
  constructor(
    @InjectModel('Submission') private readonly submissionModel: Model<any>,
    @InjectModel('Test') private readonly TestModel: Model<any>,
    @InjectModel('Student') private readonly studentModel: Model<any>,
  ) {}
  public async create(data: Submission) {
    var submission = await this.submissionModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: submission,
    };
  }

  public async findAll() {
    var submissions = await this.submissionModel.find();
    return { response_code: HttpStatus.OK, response_data: submissions };
  }

  public async findOne(id: string) {
    var submissions = await this.submissionModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: submissions,
    };
  }
  public async findtest(id: string) {
    var submission = await this.submissionModel.find({ test: id });
    return {
      response_code: HttpStatus.OK,
      response_data: submission,
    };
  }
  public async findstudent(id: string) {
    var submission = await this.submissionModel.find({ student: id });
    return {
      response_code: HttpStatus.OK,
      response_data: submission,
    };
  }

  public async update(id: string, data: Submission) {
    var submission = await this.submissionModel.findByIdAndUpdate(
      data,
      submission,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: submission,
    };
  }

  public async remove(id: string) {
    var submission = await this.submissionModel.findByIdAndDelete(id);
    submission.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: submission,
    };
  }
}
