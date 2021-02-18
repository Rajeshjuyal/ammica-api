import { Injectable, HttpService, HttpStatus } from '@nestjs/common';
import { Tcomplete } from './tcomplete.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TcompleteService {
  tcompletes: Tcomplete[] = [];
  constructor(
    @InjectModel('Tcomplete') private readonly tcompleteModel: Model<any>,
    @InjectModel('Topic') private readonly topicModel: Model<any>,
    @InjectModel('Teacher') private readonly teacherModel: Model<any>,
  ) {}
  public async create(data: Tcomplete) {
    var complete = await this.tcompleteModel.create(data);
    return {
      response_code: HttpStatus.OK,
      response_data: complete,
    };
  }

  public async findAll() {
    var complete = await this.tcompleteModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: complete,
    };
  }

  public async findOne(id: string) {
    var completes = await this.tcompleteModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: completes,
    };
  }
  public async findtopic(id: string) {
    var complete = await this.tcompleteModel.find({ topic: id });
    return {
      response_code: HttpStatus.OK,
      response_data: complete,
    };
  }

  public async findteacher(id: string) {
    var complete = await this.tcompleteModel.find({ teacher: id });
    return {
      response_code: HttpStatus.OK,
      response_data: complete,
    };
  }

  public async update(id: string, data: Tcomplete) {
    var completes = await this.tcompleteModel.findByIdAndUpdate(id, data);
    return {
      response_code: HttpStatus.OK,
      response_data: completes,
    };
  }

  public async remove(id: string) {
    var completes = await this.tcompleteModel.findByIdAndDelete(id);
    completes.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: completes,
    };
  }
}
