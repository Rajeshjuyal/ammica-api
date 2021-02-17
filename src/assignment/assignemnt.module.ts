import { Module } from '@nestjs/common';
import { AssignemntService } from './assignemnt.service';
import { AssignemntController } from './assignemnt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './assignment.model';
import { ClassSchema } from '../class/class model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Assignment', schema: AssignmentSchema },
      { name: 'Class', schema: ClassSchema },
    ]),
  ],
  controllers: [AssignemntController],
  providers: [AssignemntService],
})
export class AssignemntModule {}
