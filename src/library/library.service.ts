import { Injectable, Inject } from '@nestjs/common';
import { library } from './library.model';
import { Model } from 'mongoose';
import { LibraryModule } from './library.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LibraryService {
  librarys: library[] = [];
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<any>,
  ) {}

  public async create(library: library) {
    var library1 = await this.libraryModel.create(library);
    console.log(library1);
    return library1;
  }

  public async findAll() {
    var librarys = await this.libraryModel.find();
    return [...librarys];
  }

  public async findOne(id: string) {
    var library = await this.libraryModel.findById(id);
    return library;
  }

  public async update(id: string, librarydata: library) {
    var library = await this.libraryModel.findByIdAndUpdate(id, librarydata);
    return library;
  }

  public async remove(id: string) {
    var library = await this.libraryModel.findByIdAndDelete(id);
    library.remove();
    return library;
  }
}
