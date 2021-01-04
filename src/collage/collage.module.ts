import { Module } from '@nestjs/common';
import { CollageService } from './collage.service';
import { CollageController } from './collage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import{CollageSchema} from './collage.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Collage', schema: CollageSchema },
    ]),
  ],
  controllers: [CollageController],
  providers: [CollageService],
})
export class CollageModule {}
