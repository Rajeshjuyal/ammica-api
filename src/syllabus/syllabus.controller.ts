import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SyllabusService } from './syllabus.service';
import { Syllabus } from './syllabus.model';

@Controller('syllabus')
export class SyllabusController {
  constructor(private readonly syllabusService: SyllabusService) {}

  @Post()
  create(@Body() syllabusdata: Syllabus) {
    return this.syllabusService.create(syllabusdata);
  }

  @Get()
  findAll() {
    return this.syllabusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syllabusService.findOne(id);
  }
  @Get('bysubject/:id')
  findbySubjectid(@Param('id') id: string) {
    return this.syllabusService.findSubject(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() syllabusdata: Syllabus) {
    return this.syllabusService.update(id, syllabusdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syllabusService.remove(id);
  }
}
