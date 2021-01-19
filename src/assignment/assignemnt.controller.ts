import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  assignMetadata,
} from '@nestjs/common';
import { AssignemntService } from './assignemnt.service';
import { Assignment } from './assignment.model';

@Controller('assignment')
export class AssignemntController {
  constructor(private readonly assignmentService: AssignemntService) {}

  @Post()
  create(@Body() assignmentdata: Assignment) {
    return this.assignmentService.create(assignmentdata);
  }

  @Get()
  findAll() {
    return this.assignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentService.findOne(id);
  }
  @Get('byschool/:id')
  findbySchool(@Param('id') id: string) {
    return this.assignmentService.findSchool(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() assignmentdata: Assignment) {
    return this.assignmentService.update(id, assignmentdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentService.remove(id);
  }
}
