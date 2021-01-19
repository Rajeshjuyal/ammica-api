import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { Timetable } from './timetable.model';
@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Post()
  create(@Body() timetabledata: Timetable) {
    return this.timetableService.create(timetabledata);
  }

  @Get()
  findAll() {
    return this.timetableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timetableService.findOne(id);
  }
  @Get('bySchool/:id')
  findbySchool(@Param('id') id: string) {
    return this.timetableService.findSchool(id);
  }
//  @Get('bySection/:id')
//  findbySection(@Param('id')id:string){
//    return this.timetableService.findSchool(id);
//  }
  @Put(':id')
  update(@Param('id') id: string, @Body() timetabledata: Timetable) {
    return this.timetableService.update(id, timetabledata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timetableService.remove(id);
  }
}
