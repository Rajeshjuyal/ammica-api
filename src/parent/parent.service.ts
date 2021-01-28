import { HttpStatus, Injectable } from '@nestjs/common';
import { Parent } from './parent.modle';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ParentService {
  parents: Parent[] = [];
  constructor(
    @InjectModel('Parent') private readonly parentModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>,
    @InjectModel('Student') private readonly studentModel: Model<any>,
  ) {}
  public async create(parentdata: Parent) {
    var parent = await this.parentModel.create(parentdata);
    return {
      response_code: HttpStatus.OK,
      response_data: parent,
    };
  }

  public async findAll() {
    var parents = await this.parentModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: parents,
    };
  }

  public async findOne(id: string) {
    var parent = await this.parentModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: parent,
    };
  }

  public async findChildren(id: string) {
    var children = await this.studentModel.find({ parent: id });
    return {
      response_code: HttpStatus.OK,
      response_data: children,
    };
  }

  public async update(id: string, parentdata: Parent) {
    var parent = await this.parentModel.findByIdAndUpdate(id, parentdata);
    return {
      response_code: HttpStatus.OK,
      response_data: parent,
    };
  }

  public async remove(id: string) {
    var parents = await this.parentModel.findByIdAndDelete(id);
    parents.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: "Parent Deleted",
    };
  }
}
