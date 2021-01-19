import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerSchema } from './banner.model';
import { AuthService } from '../utils/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Banner', schema: BannerSchema }]),
    JwtModule.register({
      secret: '123456sonaliraju',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],

  controllers: [BannerController],
  providers: [BannerService],
  exports: [JwtModule, PassportModule],
})
export class BannerModule {}
