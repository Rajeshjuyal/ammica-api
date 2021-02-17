import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { MongooseModule } from '@nestjs/mongoose';
import{SchoolSchema} from'./school.model';
import { UsersSchema } from '../users/users.model';

@Module({
  imports:[
     MongooseModule.forFeature([
       { name: 'School', schema: SchoolSchema},
       {name:'User',schema:UsersSchema}
      ]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule {}
