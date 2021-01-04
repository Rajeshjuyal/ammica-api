import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TopicSchema } from './topic.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Topic', schema: TopicSchema }])],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
