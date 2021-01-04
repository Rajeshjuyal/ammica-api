import { Controller, Post, Body, Get } from '@nestjs/common';
import { Productservice } from './Product.service';
import { Product } from './Product.model';

@Controller('/product')
export class Productcontroller {
  constructor(private pproductservice: Productservice) {}
  @Post('')
  public addpproduct(@Body() prod: Product): any {
    console.log(prod);
    const generatedId = this.pproductservice.insertpproduct(
      prod.title,
      prod.description,
      prod.price,
    );
    return { id: generatedId };
  }
  @Get()
  getAllPproducts() {
    return this.pproductservice.getpproducts();
  }
}
