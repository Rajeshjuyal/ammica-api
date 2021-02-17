import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Performanceschema } from './performance.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Performance', schema: Performanceschema },
    ]),
  ],
  controllers: [PerformanceController],
  providers: [PerformanceService],
})
export class PerformanceModule {}
