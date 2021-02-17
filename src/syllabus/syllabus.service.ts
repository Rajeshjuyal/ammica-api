import { HttpStatus, Injectable } from '@nestjs/common';
import { Syllabus } from './syllabus.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { SubjectDTO } from 'src/subject/subject.model';

@Injectable()
export class SyllabusService {
  syllabuss: Syllabus[] = [];
  constructor(
    @InjectModel('Syllabus') private readonly syllabusModel: Model<any>,
    @InjectModel('Subject') private readonly subjectModel: Model<any>,
  ) {}

  public async create(syllabusdata: Syllabus) {
    var syllabus = await this.syllabusModel.create(syllabusdata);
    return {
      response_code: HttpStatus.OK,
      response_data: syllabus,
    };
  }

  public async findAll() {
    var syllabuss = await this.syllabusModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: syllabuss,
    };
  }

  public async findOne(id: string) {
    var syllabuss = await this.syllabusModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: syllabuss,
    };
  }
  public async findSubject(id: string) {
    var syllabus = await this.syllabusModel.find({ subject: id });
    return {
      response_code: HttpStatus.OK,
      response_data: syllabus,
    };
  }

  public async update(id: string, syllabusdata: Syllabus) {
    var syllabuss = await this.syllabusModel.findByIdAndUpdate(
      id,
      syllabusdata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: syllabuss,
    };
  }

  public async remove(id: string) {
    var syllabus = await this.syllabusModel.findByIdAndDelete(id);
    syllabus.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: "Syllabus Deleted",
    };
  }
}
