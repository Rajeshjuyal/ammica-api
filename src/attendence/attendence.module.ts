import { Module } from '@nestjs/common';
import { AttendenceService } from './attendence.service';
import { AttendenceController } from './attendence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceSchema } from './attendence.modle';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';
import { JwtStrategy } from '../utils/jwt.strategy';

import { ClassSchema } from '../class/class model';
import { StudentSchema } from '../student/student.model';
import { PeriodSchema } from '../period/period.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attendance', schema: AttendanceSchema },
     
      { name: 'Period', schema: PeriodSchema },
      
    ]),
    
  ],
  controllers: [AttendenceController],
  providers: [AttendenceService],
  
})
export class AttendenceModule {}
