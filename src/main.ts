import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { UploadModule } from './upload/upload.module';
import * as dotenv from 'dotenv';
import { globalConfig } from './utils/app-service-data';
import * as sentry from '@sentry/node';
import { from } from 'rxjs';
import { BannerModule } from './Banner/banner.module';
import { SeedService } from './seed/seed.service';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';

import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CollageModule } from './collage/collage.module';
import { ScoreModule } from './score/score.module';
import { AttendenceModule } from './attendence/attendence.module';
import { TimetableModule } from './timetable/timetable.module';
import { FeesModule } from './fees/fees.module';
import { LibraryModule } from './library/library.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicModule } from './topic/topic.module';
import { ChaptersModule } from './chapter/chapters.module';
import { UnitModule } from './unit/unit.module';
import { SyllabusModule } from './syllabus/syllabus.module';
import { TestsModule } from './tests/tests.module';
import { AssignemntModule } from './assignment/assignemnt.module';
import { ClassModule } from './class/class.module';
import { TodayclassModule } from './todayclass/todayclass.module';
import { PerformanceModule } from './performance/performance.module';
import { ReportcardModule } from './reportcard/reportcard.module';
import { ParentModule } from './parent/parent.module';
import { SettingModule } from './setting/setting.module';
import { BusinessModule } from './business/business.module';
const Cron = require('cron').CronJob;

const os = require('os');

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  if (process.env.NODE_ENV === 'production') {
    sentry.init({
      dsn: 'https://ca602143bd1c4e1584d5b9cd5781e06b@sentry.io/1783844',
    });
  }

  //
  let options;
  if (process.env.NODE_ENV === 'production') {
    options = new DocumentBuilder()
      .setTitle('Amica App')
      .setBasePath('/')
      .setVersion('v1')
      .addBearerAuth()
      .setSchemes('https')
      .build();
  } else {
    options = new DocumentBuilder()
      .setTitle('Amica App')
      .setBasePath('/')
      .setVersion('v1')
      .addBearerAuth()
      .build();
    const networkData = os.networkInterfaces();
    if (process.platform.toString() == 'darwin') {
      globalConfig.localIp = networkData.en0.find(
        data => data.family === 'IPv4',
      ).address;
      console.log('IP', globalConfig.localIp);
    } else if (process.platform.toString() == 'win32') {
      console.log(networkData);
      globalConfig.localIp = networkData['Wi-Fi'].find(
        data => data.family === 'IPv4',
      ).address;
      console.log(globalConfig.localIp);
    }
  }
  const document = SwaggerModule.createDocument(app, options, {
    include: [
      AttendenceModule,
      TeacherModule,
      BusinessModule,
      SubjectModule,
      BannerModule,
      StudentModule,
      CourseModule,
      CollageModule,
      ScoreModule,
      TimetableModule,
      FeesModule,
      LibraryModule,
      SettingModule,
      TopicModule,

      ChaptersModule,

      UnitModule,

      SyllabusModule,

      TestsModule,

      AssignemntModule,

      ClassModule,

      TodayclassModule,

      PerformanceModule,

      ReportcardModule,

      ParentModule,
    ],
  });
  SwaggerModule.setup('/explorer', app, document);
  const configService = app.get(SeedService);

  //on server run seed set if SEED in .env file true
  await configService.seed(process.env.SEED == 'true' ? true : false);
  // on every 59 mins seed db set
  new Cron(
    '0 */59 * * * *',
    async function() {
      console.log('crone job to set seed db...Inside seed');
      await configService.seed(process.env.SEED == 'true' ? true : false);
    },
    null,
    true,
  );

  await app.listen(process.env.PORT || 4000);
  console.log('http://localhost:4000/explorer/#/');
}

bootstrap();

// //on server run seed set if SEED in .env file true
// require('../mongo-seeding').seed((process.env.SEED=="true")?true:false);
//  // on every 20 mins seed db set
// new Cron('0 */59 * * * *', function () {
//     console.log("crone job to set seed db...")
//     require('../mongo-seeding').seed((process.env.SEED=="true")?true:false);
// }, null, true)
