import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ChaptersService } from './chapters.service';

import { Chapters } from './chapter.model';
@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post()
  create(@Body() chapterdata: Chapters) {
    return this.chaptersService.create(chapterdata);
  }

  @Get()
  findAll() {
    return this.chaptersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaptersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() chapterdata: Chapters) {
    return this.chaptersService.update(+id, chapterdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chaptersService.remove(+id);
  }
}
