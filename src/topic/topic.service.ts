import { HttpStatus, Injectable } from '@nestjs/common';
import { Topic } from './topic.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicService {
  topics: Topic[] = [];
  constructor(
    @InjectModel('Topic') private readonly topicModel: Model<any>,
    @InjectModel('Chapter') private readonly chapterModel: Model<any>,
  ) {}

  public async create(topicdata: Topic) {
    var topic = await this.topicModel.create(topicdata);
    return {
      response_code: HttpStatus.OK,
      response_data: topic,
    };
  }

  public async findAll() {
    var topics = await this.topicModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: topics,
    };
  }

  public async findOne(id: string) {
    var topic = await this.topicModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: topic,
    };
  }
  public async findchapter(id: string) {
    var topics = await this.topicModel.find({ chapter: id });
    return {
      response_code: HttpStatus.OK,
      response_data: topics,
    };
  }

  public async update(id: string, topicdata: Topic) {
    var topic = await this.topicModel.findByIdAndUpdate(id, topicdata);
    return {
      response_code: HttpStatus.OK,
      response_data: topic,
    };
  }

  public async remove(id: string) {
    var topics = await this.topicModel.findByIdAndRemove(id);
    topics.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: "Topic Deleted",
    };
  }
}
