import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitSchema } from './unit .model';
import { SyllabusSchema } from 'src/syllabus/syllabus.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Unit', schema: UnitSchema },{ name: 'Syllabus', schema: SyllabusSchema }]),
  ],
  controllers: [UnitController],
  providers: [UnitService],
})
export class UnitModule {}
