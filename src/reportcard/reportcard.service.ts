import { Injectable } from '@nestjs/common';
import { Reportcard } from './reportcard.model';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

@Injectable()
export class ReportcardService {
  reportscard: [] = [];
  constructor(
    @InjectModel('Reportcard') private readonly reportcardModel: Model<any>,
  ) {}

  public async create(carddata: Reportcard) {
    var reportcard1 = await this.reportcardModel.create(carddata);
    console.log(reportcard1);
    return reportcard1;
  }

  public async findAll() {
    var reportcards = await this.reportcardModel.find();
    return [...reportcards];
  }

  public async findOne(id: string) {
    var reportcards = await this.reportcardModel.findById(id);
    return reportcards;
  }

  public async update(id: string, carddata: Reportcard) {
    var reportcards = await this.reportcardModel.findByIdAndUpdate(
      id,
      carddata,
    );
    return reportcards;
  }

  public async remove(id: string) {
    var reportcards = await this.reportcardModel.findByIdAndDelete(id);
    reportcards.remove();
    return reportcards();
  }
}
