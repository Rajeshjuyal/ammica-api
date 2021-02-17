import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ScoreService } from './score.service';
import { Score } from './score.model';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  create(@Body() scoredata: Score) {
    return this.scoreService.create(scoredata);
  }

  @Get()
  findAll() {
    return this.scoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoreService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() scoredata: Score) {
    return this.scoreService.update(id, scoredata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoreService.remove(id);
  }
}
