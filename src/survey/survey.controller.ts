import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { Survey } from './survey.model';


@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  create(@Body() data: Survey) {
    return this.surveyService.create(data);
  }

  @Get()
  findAll() {
    return this.surveyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Survey) {
    return this.surveyService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyService.remove(id);
  }
}
