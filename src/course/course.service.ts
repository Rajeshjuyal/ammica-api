import { Injectable, Inject } from '@nestjs/common';

import { Course } from './course.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  courses: Course[] = [];
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<any>,
  ) {}
  public async create(course: Course) {
    console.log(' In function');

    var collage1 = await this.courseModel.create(course);
    console.log(collage1);
    return collage1;
  }

  public async findAll() {
    var courses = await this.courseModel.find();
    return [...courses];
  }

  public async findOne(id: string) {
    var course = await this.courseModel.findById(id);
    return course;
  }

  public async update(id: string, coursedata: Course) {
    var course = await this.courseModel.findByIdAndUpdate(id, coursedata);
    return course;
  }

  public async remove(id: string) {
    var course = await this.courseModel.findByIdAndDelete(id);
    course.remove();
    return course;
  }
}
