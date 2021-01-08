import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Question } from './questions.model';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() question: Question) {
    return this.questionsService.create(question);
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }

  @Get('byassignment/:id')
  findByAssignment(@Param('id') id: string) {
    return this.questionsService.findAssignment(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() Question: Question) {
    return this.questionsService.update(id, Question);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(id);
  }
}
