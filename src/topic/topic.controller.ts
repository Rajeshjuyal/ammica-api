import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from './topic.model';
@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  create(@Body() topicdata: Topic) {
    return this.topicService.create(topicdata);
  }

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(id);
  }

  @Get('bychapter/:id')
  findChapter(@Param('id') id: string) {
    return this.topicService.findByChapter(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() topicdata: Topic) {
    return this.topicService.update(id, topicdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicService.remove(id);
  }
}
