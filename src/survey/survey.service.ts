import { Injectable, HttpStatus } from '@nestjs/common';
import { Survey } from './survey.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SurveyService {
  Surveys: Survey[] = [];
  constructor(
    @InjectModel('Survey') private readonly surveyModel: Model<any>,
  ) {}
  public async create(data: Survey) {
    var survey = await this.surveyModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: survey,
    };
  }

  public async findAll() {
    var surveys = await this.surveyModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: surveys,
    };
  }

  public async findOne(id: string) {
    var surveys = await this.surveyModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: surveys,
    };
  }

  public async update(id: string, data: Survey) {
    var surveys = await this.surveyModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: surveys,
    };
  }

  public async remove(id: string) {
    var surveys = await this.surveyModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: surveys,
    };
  }
}
