import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { Setting } from './setting.model';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Post()
  create(@Body() settingdata: Setting) {
    return this.settingService.create(settingdata);
  }

  @Get()
  findAll() {
    return this.settingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() settingdata: Setting) {
    return this.settingService.update(id, settingdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingService.remove(id);
  }
}
