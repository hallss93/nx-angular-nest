import { Injectable } from '@nestjs/common';
import { User } from '@myapp/api-interfaces';

@Injectable()
export class UserService {
  getData(): User {
    return { name: 'Hallison Melo', phone: '+5586900000000', age: 27 };
  }
}
