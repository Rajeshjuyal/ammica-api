import {MongooseModule} from '@nestjs/mongoose';
import { SeedService } from './seed.service'; 
import {Module, HttpService, HttpModule} from '@nestjs/common';
import {NotificationsSchema} from '../notifications/notifications.model';
import {UsersSchema} from '../users/users.model';
import {SettingSchema} from '../setting/setting.model';
import {BannerSchema} from '../Banner/banner.model';
import {ChatSchema} from '../chat/chat.model';
import {SequenceSchema} from '../sequence/sequence.model';
       
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Notifications', schema: NotificationsSchema},
      {name: 'Users', schema: UsersSchema},
      {name: 'Setting', schema: SettingSchema},
      {name: 'Banner', schema: BannerSchema},
      {name: 'Chat', schema: ChatSchema},
      {name: 'Sequence', schema: SequenceSchema}
    ]),
    HttpModule,
],
  controllers: [],
  providers: [SeedService]
})
export class SeedModule {}
