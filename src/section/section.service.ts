import { Injectable, HttpStatus } from '@nestjs/common';
// import { Period } from 'src/period/period.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sectio } from './sectiom.model';

@Injectable()
export class SectionService {
  section: Sectio[] = [];
  constructor(
    @InjectModel('Section') private readonly sectionModel: Model<any>,
    @InjectModel('Class') private readonly classModel: Model<any>,
  ) {}
  public async create(data: Sectio) {
    var sections7 = await this.sectionModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: sections7,
    };
  }

  public async findAll() {
    var section8 = await this.sectionModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: section8,
    };
  }

  public async findOne(id: string) {
    var section9 = await this.sectionModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: section9,
    };
  }
  public async findClass(id: string) {
    var section10 = await this.sectionModel.find({ class: id });
    return {
      response_code: HttpStatus.OK,
      response_data: section10,
    };
  }

  public async update(id: string, data: Sectio) {
    var section11 = await this.sectionModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: section11,
    };
  }

  public async remove(id: string) {
    var section12 = await this.sectionModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: section12,
    };
  }
}
