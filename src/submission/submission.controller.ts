import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { Submission } from './submission.model';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  create(@Body() data: Submission) {
    return this.submissionService.create(data);
  }

  @Get()
  findAll() {
    return this.submissionService.findAll();
  }
  @Get('bytest/:id')
  findtest(@Param('id') id: string) {
    return this.submissionService.findtest(id);
  }
  @Get('bystudent/:id')
  findstudent(@Param('id') id: string) {
    return this.submissionService.findstudent(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Submission) {
    return this.submissionService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionService.remove(id);
  }
}
