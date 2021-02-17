import { Injectable, Inject } from '@nestjs/common';
import { Collage } from './collage.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CollageService {
  collages: Collage[] = [];
  constructor(
    @InjectModel('Collage') private readonly collageModel: Model<any>,
  ) {}
  public async create(collage: Collage) {
    var collage1 = await this.collageModel.create(collage);
    console.log(collage1);
    return collage1;
  }

  public async findAll() {
    var collages = await this.collageModel.find();
    return [...collages];
  }

  public async findOne(id: string) {
    var collage = await this.collageModel.findById(id);
    return collage;
  }

  public async update(id: string, collagedata: Collage) {
    var collage = await this.collageModel.findByIdAndUpdate(id, collagedata);
    return collage;
  }

  public async remove(id: string) {
    var collage = await this.collageModel.findByIdAndDelete(id);
    collage.remove();
    return collage;
  }
}
