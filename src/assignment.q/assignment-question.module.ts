import { Module } from '@nestjs/common';
import { AssignmentQuestionService } from './assignment-question.service';
import { AssignmentQuestionController } from './assignment-question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentQuestionSchema } from './assignment-question.model';
import { AssignmentSchema } from '../assignment/assignment.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AssignmentQuestion', schema: AssignmentQuestionSchema },
      { name: 'Assignment', schema: AssignmentSchema },
    ]),
  ],
  controllers: [AssignmentQuestionController],
  providers: [AssignmentQuestionService],
})
export class AssignmentQuestionModule {}
