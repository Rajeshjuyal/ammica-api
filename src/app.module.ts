import { Global, HttpModule, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { ScheduleModule } from 'nest-schedule';
import { BannerModule } from './Banner/banner.module';
import { AppGateway } from './app.gateway';
import { SeedModule } from './seed/seed.module';
import { SequenceModule } from './sequence/sequence.module';
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
import { SettingModule } from './setting/setting.module';
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
import { SchoolModule } from './school/school.module';
import { QuestionModule } from './question/question.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SectionModule } from './section/section.module';
import { PeriodModule } from './period/period.module';
import { BusinessModule } from './business/business.module';
import { PayModule } from './pay/pay.module';
import { CatogeryModule } from './catogery/catogery.module';
import { SubmissionModule } from './submission/submission.module';
import { TcompleteModule } from './tcomplete/tcomplete.module';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri:
          process.env.NODE_ENV == 'production'
            ? process.env.MONGO_DB_PRODUCTION_URL
            : process.env.MONGO_DB_TESTING_URL,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    }),
    UsersModule,
    NotificationsModule,
    UploadModule,
    ScheduleModule.register(),
    BannerModule,
    BusinessModule,
    SeedModule,
    SequenceModule,
    AttendenceModule,
    TeacherModule,
    SubjectModule,
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
    SchoolModule,
    QuestionModule,
    SectionModule,
    PeriodModule,
    PayModule,
    CatogeryModule,
    SubmissionModule,
    TcompleteModule,
  ],
  controllers: [AppController],
  providers: [AppGateway],
  exports: [AppGateway],
})
export class AppModule {}
