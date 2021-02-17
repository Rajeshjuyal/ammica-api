import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoreSchema } from './score.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Score', schema: ScoreSchema }]),
  ],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
