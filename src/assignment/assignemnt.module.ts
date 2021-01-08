import { Module } from '@nestjs/common';
import { AssignemntService } from './assignemnt.service';
import { AssignemntController } from './assignemnt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './assignment.model';
import { TeacherSchema } from '../teacher/teacher.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema },{ name: 'Teacher', schema: TeacherSchema },]),
  ],
  controllers: [AssignemntController],
  providers: [AssignemntService],
})
export class AssignemntModule {}
