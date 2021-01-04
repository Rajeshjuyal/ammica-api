import { Injectable } from '@nestjs/common';
import { Test } from './test.model';
import { TestsModule } from './tests.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TestsService {
  testss: Test[] = [];
  constructor(@InjectModel('Test') private readonly testModel: Model<any>) {}

 public async create(tests: Test) {
    var test1 = await this.testModel.create(tests);
    console.log(test1);
    return test1;
    
  }

  public async findAll() {
    var testss = await this.testModel.find();
    return [...testss];
  }

  public async findOne(id: string) {
    var testss = await this.testModel.findById(id);
    return testss;
  }

  public async update(id: string, testdata: Test) {
    var testss = await this.testModel.findByIdAndUpdate(id, testdata);
    return testss;
  }
  public async remove(id: string) {
    var testss = await this.testModel.findByIdAndDelete(id);
    testss.remove();
    return testss;
  }
}
