import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionSchema } from './submission.model';
import { TestSchema } from '../tests/test.model';
import { StudentSchema } from '../student/student.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Submission', schema: SubmissionSchema },
      { name: 'Test', schema: TestSchema },
      { name: 'Student', schema: StudentSchema },
    ]),
  ],
  controllers: [SubmissionController],
  providers: [SubmissionService],
})
export class SubmissionModule {}
