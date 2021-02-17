import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FeesService } from './fees.service';
import { Fees } from './fees.model';

@Controller('fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Post()
  create(@Body() feesdata: Fees) {
    return this.feesService.create(feesdata);
  }

  @Get()
  findAll() {
    return this.feesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() feesdata: Fees) {
    return this.feesService.update(id, feesdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feesService.remove(id);
  }
}
