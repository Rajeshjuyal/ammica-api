import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SyllabusSchema } from '../syllabus/syllabus.model';
import { SubjectSchema } from '../subject/subject.model';
import { QuestionSchema } from './questions.model';
import { AssignmentSchema } from '../assignment/assignment.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema},{ name: 'Assignment', schema: AssignmentSchema},]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
