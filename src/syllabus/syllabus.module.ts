import { Module } from '@nestjs/common';
import { SyllabusService } from './syllabus.service';
import { SyllabusController } from './syllabus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SyllabusSchema } from './syllabus.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Syllabus', schema: SyllabusSchema }]),
  ],
  controllers: [SyllabusController],
  providers: [SyllabusService],
})
export class SyllabusModule {}
