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
  create(@Body() data: Teacher) {
    return this.teacherService.create(data);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }
  @Get('byUser/:id')
  findbyUser(@Param('id') id: string) {
    return this.teacherService.findSchool(id);
  }
  @Get('bySchool/:id')
  findbySchool(@Param('id') id: string) {
    return this.teacherService.findSchool(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Teacher) {
    return this.teacherService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(id);
  }
}
