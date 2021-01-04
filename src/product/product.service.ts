import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductSchema, ProductModel } from './Product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class Productservice {
  private pproducts: Product[] = [];
  constructor(
    @InjectModel('Product') private readonly productModel: Model<any>,
  ) {}

  async insertpproduct(title: string, desc: string, price: number) {
    const newproduct = new this.productModel({
      title: title,
      description: desc,
      price: price,
    });
    // const result = await newproduct.save();
    // console.log(result);
    return newproduct.id;
  }
  getpproducts() {
    return [...this.pproducts];
  }
  getSinglepproduct(pproductId: String) {
    const product = this.pproducts.find((prob) => prob.id === pproductId);
    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...this.pproducts };
  }
}
