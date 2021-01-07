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

  public async create(subject: Subject) {
    var subject1 = await this.subjectModel.create(subject);
    console.log(subject1);
    return subject1;
  }

  public async findAll() {
    var subjects = await this.subjectModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: subjects
    };
    // return [...subjects];
  }

  public async findOne(id: string) {
    var subject = await this.subjectModel.findById(id);

    return subject;
  }

  public async update(id: string, subjectdata: Subject) {
    var subject = await this.subjectModel.findByIdAndUpdate(id, subjectdata);
    return subject;
  }

  public async remove(id: string) {
    var subject = await this.subjectModel.findByIdAndDelete(id);
    subject.remove();
    return subject;
  }
}
