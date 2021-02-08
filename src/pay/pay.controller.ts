import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PayService } from './pay.service';
import { Pay } from './pay.model';

@Controller('pay')
export class PayController {
  constructor(private readonly payService: PayService) {}

  @Post()
  create(@Body() data:Pay ) {
    return this.payService.create(data);
  }

  @Get()
  findAll() {
    return this.payService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Pay) {
    return this.payService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payService.remove(id);
  }
}
