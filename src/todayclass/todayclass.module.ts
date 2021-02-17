import { Module } from '@nestjs/common';
import { TodayclassService } from './todayclass.service';
import { TodayclassController } from './todayclass.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TodayclassSchema } from './todayclass.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Todayclass', schema: TodayclassSchema },
    ]),
  ],

  controllers: [TodayclassController],
  providers: [TodayclassService],
})
export class TodayclassModule {}
