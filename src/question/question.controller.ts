import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.model';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() questiondata: Question) {
    return this.questionService.create(questiondata);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }
  @Get('bytest/:id')
  findbytest(@Param('id') id: string) {
    return this.questionService.findtest(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() questiondata: Question) {
    return this.questionService.update(id, questiondata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(id);
  }
}
