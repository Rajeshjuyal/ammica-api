import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentSchema } from './parent.modle';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parent', schema: ParentSchema }]),
  ],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {}
