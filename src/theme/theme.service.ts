import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theme } from './entities/theme.entity';

@Injectable()
export class ThemeService {
  constructor(@InjectModel('Theme') private readonly themeModel: Model<any>){}
  public async create(theme: Theme) {
    var themesetting = await this.themeModel.create(theme);
    console.log(themesetting);
    return themesetting;
  }

  public async findAll() {
    var themes = await this.themeModel.find();
    return [...themes];
  }

  public async findOne(id: string) {
    var theme = await this.themeModel.findById(id);
    return theme;
  }

  public async update(id: string, themedata: Theme) {
    var theme = await this.themeModel.findByIdAndUpdate(id, themedata);
    return theme;
  }

  public async remove(id: string) {
    var theme = await this.themeModel.findByIdAndDelete(id);
    theme.remove();
    return 'Theme Deleted Successfully';
  }
}
