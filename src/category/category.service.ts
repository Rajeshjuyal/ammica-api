import { Injectable, HttpStatus } from '@nestjs/common';
import { Catogery } from './category.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  catogerys: Catogery[] = [];
  constructor(
    @InjectModel('Catogery') private readonly catogeryModel: Model<any>,
  ) {}
  public async create(data: Catogery) {
    var catogery1 = await this.catogeryModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery1,
    };
  }

  public async findAll() {
    var catogery2 = await this.catogeryModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: catogery2,
    };
  }

  public async findOne(id: string) {
    var catogery3 = await this.catogeryModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery3,
    };
  }

  public async update(id: string, data: Catogery) {
    var catogery4 = await this.catogeryModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery4,
    };
  }

  public async remove(id: string) {
    var catogery5 = await this.catogeryModel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: catogery5,
    };
  }
}
