import { HttpStatus, Injectable } from '@nestjs/common';
import { Chapters } from './chapter.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel('Chapters') private readonly chaptersModel: Model<any>,
    @InjectModel('Unit') private readonly unitModel: Model<any>
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

  public async findOne(id: string) {
    var chapterss = await this.chaptersModel.findById(id);
    return chapterss;
  }

  public async findByUnit(id:string) {
    var chapters = await this.chaptersModel.find({unit:id});
    return {
      response_code: HttpStatus.OK,
      response_data: chapters
    };
  }

  public async update(id: string, chapterdata: Chapters) {
    var chapterss = await this.chaptersModel.findByIdAndUpdate(id, chapterdata);
    return chapterss;
  }

  public async remove(id: string) {
    var chapterss = await this.chaptersModel.findByIdAndDelete(id);
    chapterss.remove();
    return chapterss;
  }
}
