import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { ClassSchema } from '../class/class model';
import { SectioSchema } from './sectiom.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Section', schema: SectioSchema },
      { name: 'Class', schema: ClassSchema },
    ]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
