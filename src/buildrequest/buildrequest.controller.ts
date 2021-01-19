import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildrequestService } from './buildrequest.service';
import { Build } from './build.model';

@Controller('buildrequest')
export class BuildrequestController {
  constructor(private readonly buildrequestService: BuildrequestService) {}

  @Post()
  create(@Body() builddata: Build) {
    return this.buildrequestService.create(builddata);
  }

  @Get()
  findAll() {
    return this.buildrequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildrequestService.findOne(id);
  }
  @Get('byUser/:id')
  findUser(@Param('id') id: string) {
    return this.buildrequestService.findUser(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() builddata: Build) {
    return this.buildrequestService.update(id, builddata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildrequestService.remove(id);
  }
}
