import { Injectable, HttpStatus } from '@nestjs/common';
import { Test } from './test.model';
import { TestsModule } from './tests.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Http2ServerRequest } from 'http2';

@Injectable()
export class TestsService {
  testss: Test[] = [];
  constructor(
    @InjectModel('Test') private readonly testModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>,
  ) {}

  public async create(tests: Test) {
    var test1 = await this.testModel.create(tests);

    return {
      response_code: HttpStatus.OK,
      response_data: test1,
    };
  }

  public async findAll() {
    var testss = await this.testModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: testss,
    };
  }

  public async findOne(id: string) {
    var testss = await this.testModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: testss,
    };
  }
  public async findUser(id: string) {
    var testss = await this.testModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: testss,
    };
  }

  public async update(id: string, testdata: Test) {
    var testss = await this.testModel.findByIdAndUpdate(id, testdata);
    return {
      response_code: HttpStatus.OK,
      response_data: testss,
    };
  }
  public async remove(id: string) {
    var testss = await this.testModel.findByIdAndDelete(id);
    testss.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: testss,
    };
  }
}
