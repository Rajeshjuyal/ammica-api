import { Injectable, Inject } from '@nestjs/common';
import { Score } from './score.model';
import { Model } from 'mongoose';
import { ScoreModule } from './score.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ScoreService {
  scoress: Score[] = [];
  constructor(@InjectModel('Score') private readonly scoreModel: Model<any>) {}

  public async create(score: Score) {
    var score1 = await this.scoreModel.create(score);
    console.log(score1);
    return score1;
  }

  public async findAll() {
    var scoress = await this.scoreModel.find();
    return [...scoress];
  }

  public async findOne(id: string) {
    var score = await this.scoreModel.findById(id);
    return score;
  }

  public async update(id: string, scoredata: Score) {
    var score = await this.scoreModel.findByIdAndUpdate(id, scoredata);
    return score;
  }

  public async remove(id: string) {
    var score = await this.scoreModel.findByIdAndDelete(id);
    score.remove();
    return score;
  }
}
