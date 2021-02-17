import { Injectable, HttpStatus } from '@nestjs/common';
import { Chapters } from './chapter.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ChaptersService {
  chapterss: Chapters[] = [];
  constructor(
    @InjectModel('Chapters') private readonly chaptersModel: Model<any>,
    @InjectModel('Unit') private readonly unitModel: Model<any>,
  ) {}

  public async create(chapter: Chapters) {
    var chapter1 = await this.chaptersModel.create(chapter);

    return {
      response_code: HttpStatus.OK,
      response_data: chapter1,
    };
  }

  public async findAll() {
    var chapterss = await this.chaptersModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: chapterss,
    };
  }

  public async findOne(id: string) {
    var chapterss = await this.chaptersModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: chapterss,
    };
  }
  public async findUnit(id: string) {
    var chapterss = await this.chaptersModel.find({ unit: id });
    return {
      response_code: HttpStatus.OK,
      response_data: chapterss,
    };
  }

  public async update(id: string, chapterdata: Chapters) {
    var chapterss = await this.chaptersModel.findByIdAndUpdate(id, chapterdata);
    return {
      response_code: HttpStatus.OK,
      response_data: chapterss,
    };
  }

  public async remove(id: string) {
    var chapterss = await this.chaptersModel.findByIdAndDelete(id);
    chapterss.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: chapterss,
    };
  }
}
