import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.model';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() teacherdata: Teacher) {
    return this.teacherService.create(teacherdata);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() teacherdata: Teacher) {
    return this.teacherService.update(id, teacherdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(id);
  }
}
