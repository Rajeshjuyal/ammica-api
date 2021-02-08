import { Module } from '@nestjs/common';
import { PayService } from './pay.service';
import { PayController } from './pay.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaySchema } from './pay.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pay', schema: PaySchema }])],
  controllers: [PayController],
  providers: [PayService],
})
export class PayModule {}
