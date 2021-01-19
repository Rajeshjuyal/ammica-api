import { Injectable, HttpStatus } from '@nestjs/common';
import { AssignmentQuestion } from './assignment-question.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssignmentQuestionService {
  AssignmentQuestions: AssignmentQuestion[] = [];
  constructor(
    @InjectModel('AssignmentQuestion')
    private readonly assignmentquestionModel: Model<any>,
    @InjectModel('Assignment') private readonly assignmentModel: Model<any>,
  ) {}
  public async create(Questiondata: AssignmentQuestion) {
    var Assignmentquestions1 = await this.assignmentquestionModel.create(
      Questiondata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: Assignmentquestions1,
    };
  }

  public async findAll() {
    var AssignmentQuestions = await this.assignmentquestionModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: AssignmentQuestions,
    };
  }

  public async findOne(id: string) {
    var AssignmentQuestion = await this.assignmentquestionModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: AssignmentQuestion,
    };
  }

  public async update(id: string, AssignmentQuestionData: AssignmentQuestion) {
    var Assignmentquestions1 = await this.assignmentquestionModel.findByIdAndUpdate(
      id,
      AssignmentQuestionData,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: Assignmentquestions1,
    };
  }

  public async remove(id: string) {
    var Assignmentquestions1 = await this.assignmentquestionModel.findByIdAndDelete(
      id,
    );

    return {
      response_code: HttpStatus.OK,
      response_data: Assignmentquestions1,
    };
  }
}
