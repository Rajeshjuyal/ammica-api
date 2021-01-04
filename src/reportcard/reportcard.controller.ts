import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportcardService } from './reportcard.service';
import { Reportcard } from './reportcard.model';

@Controller('reportcard')
export class ReportcardController {
  constructor(private readonly reportcardService: ReportcardService) {}

  @Post()
  create(@Body() carddata: Reportcard) {
    return this.reportcardService.create(carddata);
  }

  @Get()
  findAll() {
    return this.reportcardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportcardService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() carddata: Reportcard) {
    return this.reportcardService.update(id, carddata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportcardService.remove(id);
  }
}
