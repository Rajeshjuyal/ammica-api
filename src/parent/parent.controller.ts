import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentService } from './parent.service';
import { Parent } from './parent.modle';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  create(@Body() parentdata: Parent) {
    return this.parentService.create(parentdata);
  }

  @Get()
  findAll() {
    return this.parentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() parentdata: Parent) {
    return this.parentService.update(id, parentdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentService.remove(id);
  }
}
