import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CollageService } from './collage.service';
import { Collage } from './collage.model';

@Controller('collage')
export class CollageController {
  constructor(private readonly collageService: CollageService) {}

  @Post()
  create(@Body() collagedata: Collage) {
    console.log(collagedata);
    return this.collageService.create(collagedata);
    
  }

  @Get()
  findAll() {
    return this.collageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() collagedata: Collage) {
    return this.collageService.update(id, collagedata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collageService.remove(id);
  }
}
