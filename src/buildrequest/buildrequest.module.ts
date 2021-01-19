import { Module } from '@nestjs/common';
import { BuildrequestService } from './buildrequest.service';
import { BuildrequestController } from './buildrequest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildSchema } from './build.model';
import { UsersSchema } from '../users/users.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Build', schema: BuildSchema },
      { name: 'User', schema: UsersSchema },
    ]),
  ],
  controllers: [BuildrequestController],
  providers: [BuildrequestService],
})
export class BuildrequestModule {}
