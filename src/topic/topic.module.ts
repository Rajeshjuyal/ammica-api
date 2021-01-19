import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TopicSchema } from './topic.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersSchema } from '../chapter/chapter.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Topic', schema: TopicSchema },
      { name: 'Chapter', schema: ChaptersSchema },
    ]),
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
