import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TimetableSchema } from './timetable.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Timetable', schema: TimetableSchema }]),
  ],

  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
