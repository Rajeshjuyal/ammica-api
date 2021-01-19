import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { Class } from './class model';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  create(@Body() classdata: Class) {
    return this.classService.create(classdata);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(id);
  }
  @Get('bySchool/:id')
  findSchool(@Param('id') id: string) {
    return this.classService.findSchool(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() classdata: Class) {
    return this.classService.update(id, classdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(id);
  }
}
