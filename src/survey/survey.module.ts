import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveySchema } from './survey.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Survey', schema: SurveySchema }]),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
