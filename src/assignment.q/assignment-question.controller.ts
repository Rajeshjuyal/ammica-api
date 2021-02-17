import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignmentQuestionService } from './assignment-question.service';
import { AssignmentQuestion } from './assignment-question.model';

@Controller('assignment-question')
export class AssignmentQuestionController {
  constructor(
    private readonly assignmentQuestionService: AssignmentQuestionService,
  ) {}

  @Post()
  create(@Body() Questiondata: AssignmentQuestion) {
    return this.assignmentQuestionService.create(Questiondata);
  }

  @Get()
  findAll() {
    return this.assignmentQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentQuestionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Questiondata: AssignmentQuestion) {
    return this.assignmentQuestionService.update(id, Questiondata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentQuestionService.remove(id);
  }
}
