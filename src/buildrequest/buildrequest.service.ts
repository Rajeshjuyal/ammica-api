import { Injectable, HttpStatus } from '@nestjs/common';
import { Build } from './build.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BuildrequestService {
  builds: Build[] = [];
  constructor(
    @InjectModel('Build') private readonly buildModel: Model<any>,
    @InjectModel('User') private readonly userModel: Model<any>
    ) {}
  public async create(builddata: Build) {
    var builds = await this.buildModel.create(builddata);
    return {
      response_code: HttpStatus.OK,
      response_data: builds,
    };
  }

  public async findAll() {
    var build2 = await this.buildModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: build2,
    };
  }

  public async findOne(id: string) {
    var build3 = await this.buildModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: build3,
    };
  }
 public async findUser(id:string){
    var build4=await this.buildModel.find({user:id})
    return{
      response_code:HttpStatus.OK,
      response_data:build4
    }
  }

  public async update(id: string, builddata: Build) {
    var build = await this.buildModel.findByIdAndUpdate(id, builddata);
    return {
      response_code: HttpStatus.OK,
      response_data: build,
    };
  }

  public async remove(id: string) {
    var builds = await this.buildModel.findByIdAndDelete(id);
    builds.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: builds,
    };
  }
}
