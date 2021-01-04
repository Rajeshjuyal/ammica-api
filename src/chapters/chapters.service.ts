import { Injectable } from '@nestjs/common';
import { Chapters } from './chapter.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ChaptersService {
  chapterss: Chapters[] = [];
  constructor(
    @InjectModel('Chapters') private readonly chaptersModel: Model<any>,
  ) {}

  public async create(chapter: Chapters) {
    var chapter1 = await this.chaptersModel.create(chapter);
    console.log(chapter1);
    return chapter1;
  }

  public async findAll() {
    var chapterss = await this.chaptersModel.find();
    return chapterss;
  }

  public async findOne(id: number) {
    var chapterss = await this.chaptersModel.findById(id);
    return chapterss;
  }

  public async update(id: number, chapterdata: Chapters) {
    var chapterss = await this.chaptersModel.findByIdAndUpdate(id, chapterdata);
    return chapterss;
  }

  public async remove(id: number) {
    var chapterss = await this.chaptersModel.findByIdAndDelete(id);
    chapterss.remove();
    return chapterss;
  }
}
