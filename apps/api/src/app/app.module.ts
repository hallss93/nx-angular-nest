import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from '../message/message.controller';
import { MessageService } from '../message/message.service';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';

@Module({
  imports: [],
  controllers: [AppController, MessageController, UserController],
  providers: [AppService, MessageService, UserService],
})
export class AppModule {}
