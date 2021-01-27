import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() studentdata: Student) {
    return this.studentService.create(studentdata);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }
  @Get('byuser/:id')
  findbyuser(@Param('id') id: string) {
    return this.studentService.findUser(id);
  }
  @Get('bysection/:id')
  findbySection(@Param('id') id: string) {
    return this.studentService.findSection(id);
  }

  @Get('todayclasses/:Day/:id')
  tClasses(@Param('Day') day: string, @Param('id') id: string) {
    return this.studentService.todayClasses(id, day);
  }
  @Get('timetable/:id')
  myTimetable(@Param('id') id: string) {
    return this.studentService.timetable(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() studentdata: Student) {
    return this.studentService.update(id, studentdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
