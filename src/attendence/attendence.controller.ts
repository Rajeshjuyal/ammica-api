import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { Attendence } from './attendence.modle';

@Controller('attendence')
export class AttendenceController {
  constructor(private readonly attendenceService: AttendenceService) {}

  @Post()
  create(@Body() attendencebody: Attendence) {
    console.log(attendencebody);
    return this.attendenceService.create(attendencebody);
  }

  @Get()
  findAll() {
    return this.attendenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendenceService.findOne(id);
  }

  @Get('user/:id')
  findAtendance(@Param('id') id: string) {
    return this.attendenceService.userAttendance(id);
  }

  @Get('byPeriod/:id')
  findPeriod(@Param('id') id: string) {
    return this.attendenceService.findPeriod(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() attendencebody: Attendence) {
    return this.attendenceService.update(id, attendencebody);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendenceService.remove(id);
  }
}
