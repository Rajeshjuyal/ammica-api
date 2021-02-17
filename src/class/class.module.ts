import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './class model';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';
import { JwtStrategy } from '../utils/jwt.strategy';
import { SchoolSchema } from '../school/school.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Class', schema: ClassSchema },
      { name: 'School', schema: SchoolSchema },
    ]),
  ],

  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
