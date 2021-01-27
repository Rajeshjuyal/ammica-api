import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.model';
import { SectioSchema } from '../section/sectiom.model';
import { UsersSchema } from '../users/users.model';
import { PeriodSchema } from '../period/period.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Student', schema: StudentSchema },
      { name: 'Section', schema: SectioSchema },
      { name: 'User', schema: UsersSchema },
      { name: 'Period', schema: PeriodSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
