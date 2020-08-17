import { Injectable } from '@nestjs/common';
import { NewMessage } from '@myapp/api-interfaces';

@Injectable()
export class MessageService {
  getData(): NewMessage {
    return { message: 'Welcome to api!', error: {} };
  }
}
