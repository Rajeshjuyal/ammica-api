import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PeriodSchema } from './period.model';
import { SectioSchema } from '../section/sectiom.model';
import { TimetableSchema } from '../timetable/timetable.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Period', schema: PeriodSchema },
      { name: 'Section', schema: SectioSchema },
      { name: 'Time_table', schema: TimetableSchema },
    ]),
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}
