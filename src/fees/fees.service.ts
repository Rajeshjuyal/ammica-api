import { Injectable, Inject } from '@nestjs/common';

import { Fees } from './fees.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FeesService {
  feess: Fees[] = [];
  constructor(@InjectModel('Fees') private readonly feesModel: Model<any>) {}
  public async create(fees: Fees) {
    console.log('In function');

    var fees1 = await this.feesModel.create(fees);
    console.log(fees1);
    return fees1;
  }

  public async findAll() {
    var feess = await this.feesModel.find();
    return [...feess];
  }

  public async findOne(id: string) {
    var fees = await this.feesModel.findById(id);
    return fees;
  }

  public async update(id: string, feedata: Fees) {
    var fees = await this.feesModel.findByIdAndUpdate(id, feedata);
    return fees;
  }

  public async remove(id: string) {
    var fees = await this.feesModel.findByIdAndDelete(id);
    fees.remove();
    return fees;
  }
}
