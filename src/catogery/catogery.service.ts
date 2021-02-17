import { Injectable, HttpStatus } from '@nestjs/common';
import { Catogery } from './catogery.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatogeryService {
  Catogerys: Catogery[] = [];
  constructor(
    @InjectModel('Catogery') private readonly catogeryModel: Model<any>,
  ) {}

  public async create(data: Catogery) {
    var catogery = await this.catogeryModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery,
    };
  }

  public async findAll() {
    var catogery = await this.catogeryModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: catogery,
    };
  }

  public async findOne(id: string) {
    var catogery = await this.catogeryModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery,
    };
  }

  public async update(id: string, data: Catogery) {
    var catogery = await this.catogeryModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery,
    };
  }

  public async remove(id: string) {
    var catogery = await this.catogeryModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery,
    };
  }
}
