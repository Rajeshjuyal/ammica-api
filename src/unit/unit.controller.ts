import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from './unit .model';

@Controller('Unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  create(@Body() unitdata: Unit) {
    return this.unitService.create(unitdata);
  }

  @Get()
  findAll() {
    return this.unitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitService.findOne(id);
  }
  @Get('bysyllabus/:id')
  findbySyllabus(@Param('id') id: string) {
    return this.unitService.findSyllabus(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() unitdata: Unit) {
    return this.unitService.update(id, unitdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitService.remove(id);
  }
}
