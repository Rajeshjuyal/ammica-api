import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import{SettingSchema} from './setting.model'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Setting', schema: SettingSchema }]),
  ],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
