import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Subject } from './subject.model';

import { Model } from 'mongoose';
import { SubjectModule } from './subject.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubjectService {
  subjects: Subject[] = [];
  constructor(
    @InjectModel('Subject') private readonly subjectModel: Model<any>,
  ) {}

  public async create(subjectdata: Subject) {
    var subject = await this.subjectModel.create(subjectdata);
    console.log(subject);
    return {
      response_code: HttpStatus.OK,
      response_data: subject,
    };
  }

  public async findAll() {
    var subjects = await this.subjectModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: subjects,
    };
  }

  public async findOne(id: string) {
    var subject = await this.subjectModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: subject,
    };
  }

  public async update(id: string, subjectdata: Subject) {
    var subject = await this.subjectModel.findByIdAndUpdate(id, subjectdata);
    return {
      response_code: HttpStatus.OK,
      response_data: "Subject Updated ",
    };
  }

  public async remove(id: string) {
    var subject = await this.subjectModel.findByIdAndDelete(id);
    subject.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: "Subject Deleted ",
    };
  }
}
