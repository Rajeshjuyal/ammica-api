import { HttpStatus, Injectable } from '@nestjs/common';
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

  public async create(unitdata: Unit) {
    var unit = await this.unitModel.create(unitdata);
    return {
      response_code: HttpStatus.OK,
      response_data: unit,
    };
  }

  public async findAll() {
    var units = await this.unitModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: units,
    };
  }

  public async findOne(id: string) {
    var unit = await this.unitModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: unit,
    };
  }
  public async findSyllabus(id: string) {
    var units = await this.unitModel.find({ syllabus: id });
    return {
      response_code: HttpStatus.OK,
      response_data: units,
    };
  }

  public async update(id: string, unitdata: Unit) {
    var unit = await this.unitModel.findByIdAndUpdate(id, unitdata);
    return {
      response_code: HttpStatus.OK,
      response_data: unit,
    };
  }

  public async remove(id: string) {
    var units = await this.unitModel.findByIdAndDelete(id);
    units.remove;
    return {
      response_code: HttpStatus.OK,
      response_data: "unit removed",
    };
  }
}
