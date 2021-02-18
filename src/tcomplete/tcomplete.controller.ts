import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcompleteService } from './tcomplete.service';
import { Tcomplete } from './tcomplete.model';

@Controller('tcomplete')
export class TcompleteController {
  constructor(private readonly tcompleteService: TcompleteService) {}

  @Post()
  create(@Body() data: Tcomplete) {
    return this.tcompleteService.create(data);
  }

  @Get()
  findAll() {
    return this.tcompleteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcompleteService.findOne(id);
  }
  @Get('bytopic/:id')
  findtopic(@Param('id') id: string) {
    return this.tcompleteService.findtopic(id);
  }
  @Get('byteacher/:id')
  findteacher(@Param('id') id: string) {
    return this.tcompleteService.findteacher(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Tcomplete) {
    return this.tcompleteService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcompleteService.remove(id);
  }
}
