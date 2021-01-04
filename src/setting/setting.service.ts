import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './setting.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SettingService {
  settings: Setting[] = [];
  constructor(
    @InjectModel('Setting') private readonly scoreModel: Model<any>,
  ) {}

  public async create(setting: Setting) {
    var setting1 = await this.scoreModel.create(setting);
    console.log(setting1);
    return setting1;
  }

  public async findAll() {
    var settings = await this.scoreModel.find();

    return [...settings];
  }

  public async findOne(id: string) {
    var setting = await this.scoreModel.findById(id);
    return setting;
  }

  public async update(id: string, settingdata: Setting) {
    var setting = await this.scoreModel.findByIdAndUpdate(id, settingdata);
    return setting;
  }

  public async remove(id: string) {
    var setting = await this.scoreModel.findByIdAndDelete(id);
    setting.remove();
    return setting;
  }
}
