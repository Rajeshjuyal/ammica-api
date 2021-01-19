import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionService } from './section.service';
// import { Period } from '../period/period.model';
import { Sectio } from './sectiom.model';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  create(@Body() data: Sectio) {
    return this.sectionService.create(data);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(id);
  }
  @Get('byClass/:id')
  findbyClass(@Param('id') id: string) {
    return this.sectionService.findClass(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Sectio) {
    return this.sectionService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionService.remove(id);
  }
}
