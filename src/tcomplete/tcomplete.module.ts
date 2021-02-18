import { Module } from '@nestjs/common';
import { TcompleteService } from './tcomplete.service';
import { TcompleteController } from './tcomplete.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TcompleteSchema } from './tcomplete.model';
import { TopicSchema } from '../topic/topic.model';
import { StudentSchema } from '../student/student.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tcomplete', schema: TcompleteSchema },
      { name: 'topic', schema: TopicSchema },
      { name: 'Student', schema: StudentSchema },
    ]),
  ],
  controllers: [TcompleteController],
  providers: [TcompleteService],
})
export class TcompleteModule {}
