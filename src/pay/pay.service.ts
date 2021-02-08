import { Injectable, HttpStatus } from '@nestjs/common';
import { Pay } from './pay.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Http } from '@sentry/node/dist/integrations';

@Injectable()
export class PayService {
  constructor(@InjectModel('Pay') private readonly paymodel: Model<any>) {}
  public async create(data: Pay) {
    var pays = await this.paymodel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: pays,
    };
  }

  public async findAll() {
    var pays = await this.paymodel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: pays,
    };
  }

  public async findOne(id: string) {
    var pays = await this.paymodel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: pays,
    };
  }

  public async update(id: string, data: Pay) {
    var pays = await this.paymodel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: pays,
    };
  }

  public async remove(id: string) {
    var pays = await this.paymodel.findByIdAndDelete(id);
    return {
      response_code: HttpStatus.OK,
      response_data: pays,
    };
  }
}
