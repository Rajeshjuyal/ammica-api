import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teacher.model';
import { UsersSchema } from '../users/users.model';
import { SchoolSchema } from '../school/school.model';
import { PeriodSchema } from '../period/period.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Teacher', schema: TeacherSchema },
      { name: 'User', schema: UsersSchema },
      { name: 'School', schema: SchoolSchema },
      { name: 'Period', schema: PeriodSchema },
    ]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
