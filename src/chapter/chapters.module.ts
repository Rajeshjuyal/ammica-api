import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersSchema } from './chapter.model';
import { UnitSchema } from '../unit/unit .model';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../utils/auth.service';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Chapters', schema: ChaptersSchema },
      { name: 'Unit', schema: UnitSchema },
    ]),
    JwtModule.register({
      secret: '123456789sonali',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [ChaptersController],
  providers: [ChaptersService],
  exports: [JwtModule, PassportModule],
})
export class ChaptersModule {}
