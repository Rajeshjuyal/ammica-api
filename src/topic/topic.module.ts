import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TopicSchema } from './topic.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersSchema } from '../chapter/chapter.model';
import { CatogerySchema } from '../catogery/catogery.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Topic', schema: TopicSchema },
      { name: 'Chapter', schema: ChaptersSchema },
      { name: 'Catogery', schema: CatogerySchema },
    ]),
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
