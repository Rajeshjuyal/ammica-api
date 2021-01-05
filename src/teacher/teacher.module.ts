import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './teacher.model';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../utils/teacher-jwt.stratergy';
import { globalConfig } from '../utils/app-service-data';
import { AuthService } from '../utils/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]),
    JwtModule.register({
      secret: globalConfig.secret,
      signOptions: {
        expiresIn: '3h',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [TeacherController],
  providers: [TeacherService, JwtStrategy, AuthService],
  exports: [PassportModule, JwtStrategy],
})
export class TeacherModule {}
