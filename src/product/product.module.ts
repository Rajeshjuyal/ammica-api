import { Module } from '@nestjs/common';
import { Productcontroller } from './Product.controller';
import { Productservice } from './Product.service';
import {MongooseModule} from '@nestjs/mongoose'
import{ProductSchema} from './Product.model'
@Module({
  imports:  [MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])], 
  
  controllers: [Productcontroller],
  providers: [Productservice],
})
export class ProductModule {}
