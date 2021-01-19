import { Injectable } from '@nestjs/common';
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

  public async create(syllabus: Syllabus) {
    var syllabus1 = await this.syllabusModel.create(syllabus);
    console.log(syllabus1);
    return syllabus1;
  }

  public async findAll() {
    var syllabuss = await this.syllabusModel.find();
    return [...syllabuss];

   
  }

  public async findOne(id: string) {
    var syllabuss = await this.syllabusModel.findById(id);
    return syllabuss;
  }
  public async findSubject(id: string) {
    var syllabus = await this.syllabusModel.find({ subject: id });
    return syllabus;
  }

  public async update(id: string, syllabusdata: Syllabus) {
    var syllabuss = await this.syllabusModel.findByIdAndUpdate(
      id,
      syllabusdata,
    );
    return syllabuss;
  }

  public async remove(id: string) {
    var syllabus = await this.syllabusModel.findByIdAndDelete(id);
    syllabus.remove();
    return syllabus;
  }
}
