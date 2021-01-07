import { HttpStatus, Injectable } from '@nestjs/common';
import { Topic } from './topic.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicService {
  topics: Topic[] = [];
  constructor(@InjectModel('Topic') private readonly topicModel: Model<any>,@InjectModel('Chapters') private readonly chapterModel: Model<any>) {}

  public async create(topic: Topic) {
    var topic1 = await this.topicModel.create(topic);
    console.log(topic1);
    return topic1;
  }

  public async findAll() {
    var topics = await this.topicModel.find();
    return {
      response_code:HttpStatus.OK,
      response_data: topics
    }
  }

  public async findOne(id: string) {
    var topics = await this.topicModel.findById(id);
    return {
      response_code:HttpStatus.OK,
      response_data: topics
    }
  }

  public async findByChapter(id:string) {
    var topics = await this.topicModel.find({chapter:id});
    return {
      response_code:HttpStatus.OK,
      response_data: topics
    }
  }

  public async update(id: string, topicdata: Topic) {
    var topics = await this.topicModel.findByIdAndUpdate(id, topicdata);
    return {
      response_code:HttpStatus.OK,
      response_data: topics
    }
  }

  public async remove(id: string) {
    var topics = await this.topicModel.findByIdAndRemove(id);
    topics.remove();
    return topics;
  }
}
