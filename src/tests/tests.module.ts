import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './test.model';
import { AssignmentSchema } from '../assignment/assignment.model';
import { QuestionSchema } from '../questions/questions.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Test', schema: TestSchema },
      { name: 'Question', schema: QuestionSchema },
    ]),
  ],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}