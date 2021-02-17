import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatogeryScheam } from './category.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Catogery',schema:CatogeryScheam}])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
