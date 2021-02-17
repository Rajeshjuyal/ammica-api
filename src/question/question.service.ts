import { Injectable, HttpStatus } from '@nestjs/common';
import { Question } from './question.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class QuestionService {
  questions: Question[] = [];
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<any>,
    @InjectModel('Test') private readonly testModel: Model<any>,
  ) {}

  public async create(questiondata: Question) {
    var question1 = await this.questionModel.create(questiondata);
    return {
      response_code: HttpStatus.OK,
      response_data: question1,
    };
  }

  public async findAll() {
    var questions = await this.questionModel.find();

    return {
      response_code: HttpStatus.OK,
      response_data: questions,
    };
  }

  public async findOne(id: string) {
    var questions = await this.questionModel.findById(id);

    return {
      response_code: HttpStatus,
      response_data: questions,
    };
  }
  public async findtest(id: string) {
    var questions = await this.questionModel.find({ test: id });
    return {
      response_code: HttpStatus.OK,
      response_data: questions,
    };
  }

  public async update(id: string, questiondata: Question) {
    var questions = await this.questionModel.findByIdAndUpdate(
      id,
      questiondata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: questions,
    };
  }

  public async remove(id: string) {
    var questions = await this.questionModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: questions,
    };
  }
}
