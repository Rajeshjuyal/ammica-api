import { Injectable, Inject } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [];
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<any>,
  ) {}
  public async create(teacher: Teacher) {
    var teacher1 = await this.teacherModel.create(teacher);
    console.log(teacher1);
    return teacher1;
  }

  public async findAll() {
    var teachers = await this.teacherModel.find();
    return [...teachers];
  }

  public async findOne(id: string) {
    var teacher = await this.teacherModel.findById(id);
    return teacher;
  }

  public async update(id: string, teacherdata: Teacher) {
    var teacher = await this.teacherModel.findByIdAndUpdate(id, teacherdata);
    return teacher;
  }

  public async remove(id: string) {
    var teacher = await this.teacherModel.findByIdAndDelete(id);
    teacher.remove();
    return teacher;
  }
}
