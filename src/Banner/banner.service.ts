import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Banner } from './banner.model';

@Injectable()
export class BannerService {
  banners: Banner[] = [];
  constructor(
    @InjectModel('Banner') private readonly bannerModel: Model<any>,
  ) {}

  public async create(bannerdata: Banner) {
    var banner1 = await this.bannerModel.create(bannerdata);
    console.log(banner1);
    return banner1;
  }

  public async findAll() {
    var banners = await this.bannerModel.find();
    return [...banners];
  }

  public async findOne(id: string) {
    var banners = await this.bannerModel.findById(id);
    return banners;
  }

  public async update(id: string, bannerdata: Banner) {
    var banners = await this.bannerModel.findByIdAndUpdate(id, bannerdata);
    return banners;
  }

  public async remove(id: string) {
    var banners = await this.bannerModel.findByIdAndDelete(id);
    banners.remove();
    return banners;
  }
}
