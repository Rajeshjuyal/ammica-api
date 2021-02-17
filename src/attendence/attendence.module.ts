import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema } from './attendence.modle';
import { PeriodSchema } from '../period/period.model';
import { UsersSchema } from '../users/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attendance', schema: AttendanceSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [AttendenceController],
  providers: [AttendenceService],
})
export class AttendenceModule {}
