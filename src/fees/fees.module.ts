import { Module } from '@nestjs/common';
import { FeesService } from './fees.service';
import { FeesController } from './fees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeesSchema } from './fees.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Fees', schema: FeesSchema }]
  )],
  controllers: [FeesController],
  providers: [FeesService],
})
export class FeesModule {}
