import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './questions.model';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<any>,
    @InjectModel('Assignment') private readonly assignmentModel: Model<any>,
  ) {}

  public async create(questions: Question) {
    var test1 = await this.questionModel.create(questions);
    console.log(test1);
    return test1;
  }

  public async findAll() {
    var questionss = await this.questionModel.find();
    return [...questionss];
  }

  public async findOne(id: string) {
    var questionss = await this.questionModel.findById(id);
    return questionss;
  }
  public async findAssignment(id: string) {
    var test = await this.questionModel.find({ test, id });
    return test;
  }

  public async update(id: string, questiondata: Question) {
    var questionss = await this.questionModel.findByIdAndUpdate(id, questiondata);
    return questionss;
  }
  public async remove(id: string) {
    var questionss = await this.questionModel.findByIdAndDelete(id);
    questionss.remove();
    return questionss;
  }
}
