import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.model';
import { StudentModule } from './student.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  students: Student[] = [];
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<any>,
  ) {}

  public async create(student: Student) {
    var student1 = await this.studentModel.create(student);
    console.log(student1);
    return student1;
  }

  public async findAll() {
    var students = await this.studentModel.find();
    return [...students];
  }

  public async findOne(id: string) {
    var student = await this.studentModel.findById(id);
    return student;
  }

  public async update(id: string, studentdata: Student) {
    var student = this.studentModel.findByIdAndUpdate(id, studentdata);
    return student;
  }

  public async remove(id: string) {
    var student = await this.studentModel.findById(id);
    student.remove();
    return student;
  }
}
