import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentSchema } from './parent.modle';
import { UsersSchema } from '../users/users.model';
import { StudentSchema } from '../student/student.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parent', schema: ParentSchema }, { name: 'User', schema: UsersSchema }, { name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {}
