import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PeriodSchema } from './period.model';
import { SectioSchema } from '../section/sectiom.model';
import { TimetableSchema } from '../timetable/timetable.model';
import { UsersSchema } from '../users/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Period', schema: PeriodSchema },
      { name: 'Section', schema: SectioSchema },
      { name: 'Time_table', schema: TimetableSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}
