import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';
import { ThemeSchema } from './entities/theme.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Theme', schema: ThemeSchema }]),
  ],
  controllers: [ThemeController],
  providers: [ThemeService]
})
export class ThemeModule {}
