import { Injectable } from '@nestjs/common';
import { Unit } from './unit .model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SyllabusDto } from '../syllabus/syllabus.model';

@Injectable()
export class UnitService {
  units: Unit[] = [];
  constructor(
    @InjectModel('Unit') private readonly unitModel: Model<any>,
    @InjectModel('Syllabus') private readonly syllabus: Model<any>,
  ) {}

  public async create(unit: Unit) {
    var unit1 = await this.unitModel.create(unit);
    console.log(unit1);
    return unit1;
  }

  public async findAll() {
    var units = await this.unitModel.find();
    return units;
  }

  public async findOne(id: string) {
    var units = await this.unitModel.findById(id);
    return units;
  }
  public async findSyllabus(id: string) {
    var units = await this.unitModel.find({ syllabus: id });
    return units;
  }

  public async update(id: string, unitdata: Unit) {
    var units = await this.unitModel.findByIdAndUpdate(id, unitdata);
    return units;
  }

  public async remove(id: string) {
    var units = await this.unitModel.findByIdAndDelete(id);
    units.remove;
    return units;
  }
}
