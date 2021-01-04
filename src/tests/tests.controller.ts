import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Test } from './test.model';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  create(@Body() testdata: Test) {
    return this.testsService.create(testdata);
  }

  @Get()
  findAll() {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() testdata: Test) {
    return this.testsService.update(id, testdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsService.remove(id);
  }
}
