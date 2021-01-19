import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignedSubjectService } from './assigned-subject.service';
import { AssignedSubject } from './assigned-subject.model';

@Controller('assigned-subject')
export class AssignedSubjectController {
  constructor(
    private readonly assignedSubjectService: AssignedSubjectService,
  ) {}

  @Post()
  create(@Body() AssignedSubjectdata: AssignedSubject) {
    return this.assignedSubjectService.create(AssignedSubjectdata);
  }

  @Get()
  findAll() {
    return this.assignedSubjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignedSubjectService.findOne(id);
  }
  @Get('bySubject/:id')
  findbySubject(@Param('id') id: string) {
    return this.assignedSubjectService.findSubject(id);
  }
  @Get('bySection/:id')
  findbySection(@Param('id') id: string) {
    return this.assignedSubjectService.findSection(id);
  }
  @Get('byTeacher/:id')
  findbyTeacher(@Param('id') id: string) {
    return this.assignedSubjectService.findTeacher(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() AssignedSubjectdata: AssignedSubject,
  ) {
    return this.assignedSubjectService.update(id, AssignedSubjectdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignedSubjectService.remove(id);
  }
}
