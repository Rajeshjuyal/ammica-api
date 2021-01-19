import { Injectable, HttpStatus } from '@nestjs/common';
import { Class } from './class model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClassService {
  classes: Class[] = [];
  constructor(
    @InjectModel('Class') private readonly classModel: Model<any>,
    @InjectModel('School') private readonly schoolModel: Model<any>,
  ) {}
  public async create(classes: Class) {
    var class1 = await this.classModel.create(classes);
    return classes;
  }

  public async findAll() {
    var classes = await this.classModel.find();
    return [...classes];
  }

  public async findOne(id: string) {
    var classes = await this.classModel.findById(id);
    return classes;
  }
  public async findSchool(id: string) {
    var classes = await this.classModel.find({ class: id });
    return {
      response_code: HttpStatus.OK,
      response_data: classes,
    };
  }

  public async update(id: string, classdata: Class) {
    var classes = await this.classModel.findByIdAndUpdate(id, classdata);
    return classes;
  }

  public async remove(id: string) {
    var classes = await this.classModel.findByIdAndDelete(id);
    classes.remove();
    return classes;
  }
}
