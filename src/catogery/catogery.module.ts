import { Module } from '@nestjs/common';
import { CatogeryService } from './catogery.service';
import { CatogeryController } from './catogery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatogerySchema } from './catogery.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Catogery',schema:CatogerySchema}])

  ],
  controllers: [CatogeryController],
  providers: [CatogeryService]
})
export class CatogeryModule {}
