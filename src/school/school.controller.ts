import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './school.model';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  create(@Body() schooldata: School) {
    return this.schoolService.create(schooldata);
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() schooldata: School) {
    return this.schoolService.update(id, schooldata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(id);
  }
}