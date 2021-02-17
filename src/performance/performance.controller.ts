import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PerformanceService } from './performance.service';
import{Performance} from './performance.model'

@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Post()
  create(@Body() performancedata: Performance) {
    return this.performanceService.create(performancedata);
  }

  @Get()
  findAll() {
    return this.performanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() performancedata: Performance) {
    return this.performanceService.update(id, performancedata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performanceService.remove(id);
  }
}
