import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TodayclassService } from './todayclass.service';

import { Todayclass } from './todayclass.model';

@Controller('todayclass')
export class TodayclassController {
  constructor(private readonly todayclassService: TodayclassService) {}

  @Post()
  create(@Body() classdata: Todayclass) {
    return this.todayclassService.create(classdata);
  }

  @Get()
  findAll() {
    return this.todayclassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todayclassService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() classdata: Todayclass) {
    return this.todayclassService.update(id, classdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todayclassService.remove(id);
  }
}
