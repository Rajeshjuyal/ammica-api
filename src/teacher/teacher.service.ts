import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {JwtService} from '@nestjs/jwt';
import {AuthService} from '../utils/auth.service';
import { CredentialsDTO } from './teacher.model';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [];
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<any>,
    private jwtService: JwtService,
    private authService: AuthService,
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
  public async validateUserCredentials(credentials: CredentialsDTO) {
    credentials.email = credentials.email.toLowerCase();
    const teacher = await this.teacherModel.findOne({
      email: credentials.email,
    });
    if (!teacher) {
      console.log("No Teacher Found");
      return {
        response_code: HttpStatus.UNAUTHORIZED,
        response_data: `Teacher with email ${credentials.email} is not registered`,
      };
    } else {
      console.log("Teacher Found")
      console.log(credentials.password)
      console.log(teacher.password)
      const passwordMatch = await this.authService.verifyPassword(
        credentials.password,
        teacher.password,
      );
      console.log(passwordMatch)
      const body = {
        token: null,
        _id: null,
      };
      if (passwordMatch) {
        console.log("PASSWORD MATCHED")
        body._id = teacher._id;
        body.token = await this.authService.generateAccessToken(teacher._id);
        return { response_code: HttpStatus.OK, response_data: body };
      } else {
        console.log("PASSWORD NOT MATCHED")
        return {
          response_code: HttpStatus.UNAUTHORIZED,
          response_data: 'enter a valid password',
        };
      }
    }
  }
}
