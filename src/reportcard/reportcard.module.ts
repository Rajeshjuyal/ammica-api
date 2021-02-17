import { Module } from '@nestjs/common';
import { ReportcardService } from './reportcard.service';
import { ReportcardController } from './reportcard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportcardSchema } from './reportcard.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Reportcard',
        schema: ReportcardSchema,
      },
    ]),
  ],
  controllers: [ReportcardController],
  providers: [ReportcardService],
})
export class ReportcardModule {}
