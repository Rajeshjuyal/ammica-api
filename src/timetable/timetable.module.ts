import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TimetableSchema } from './timetable.model';
import { SchoolSchema } from '../school/school.model';
import { SectioSchema } from '../section/sectiom.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Timetable', schema: TimetableSchema },
      { name: 'School', schema: SchoolSchema },
      { name: 'Section', schema: SectioSchema },
    ]),
  ],

  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
