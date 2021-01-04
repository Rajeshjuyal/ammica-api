import { Injectable } from '@nestjs/common';
import { Parent } from './parent.modle';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ParentService {
  parents: Parent[] = [];
  constructor(
    @InjectModel('Parent') private readonly parentModel: Model<any>,
  ) {}
  public async create(parentdata: Parent) {
    var parent1 = await this.parentModel.create(parentdata);
    console.log(parent1);
    return parent1;
  }

  public async findAll() {
    var parents = await this.parentModel.find();
    return [...parents];
  }

  public async findOne(id: string) {
    var parents = await this.parentModel.findById(id);
    return parents;
  }

  public async update(id: string, parentdata: Parent) {
    var parents = await this.parentModel.findByIdAndUpdate(id, parentdata);
    return parents;
  }

  public async remove(id: string) {
    var parents = await this.parentModel.findByIdAndDelete(id);
    parents.remove();
    return parents;
  }
}
