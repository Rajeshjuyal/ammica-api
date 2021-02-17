import { Injectable, Inject, HttpStatus } from '@nestjs/common';
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

    var Course = await this.courseModel.create(course);
    return {
      response_code: HttpStatus.OK,
      response_data: Course,
    };
  }

  public async findAll() {
    var courses = await this.courseModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: courses,
    };
  }

  public async findOne(id: string) {
    var course = await this.courseModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: course,
    };
  }

  public async update(id: string, coursedata: Course) {
    var course = await this.courseModel.findByIdAndUpdate(id, coursedata);
    return {
      response_code: HttpStatus.OK,
      response_data: "Course Updated",
    };
  }

  public async remove(id: string) {
    var course = await this.courseModel.findByIdAndDelete(id);
    course.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: "Course Deleted",
    };
  }
}
