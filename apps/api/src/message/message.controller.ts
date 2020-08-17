import { Controller, Get } from '@nestjs/common';

import { NewMessage } from '@myapp/api-interfaces';

import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('message')
  getData(): NewMessage {
    return this.messageService.getData();
  }
}
