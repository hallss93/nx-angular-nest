import { Controller, Get } from '@nestjs/common';

import { User } from '@myapp/api-interfaces';

import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  getData(): User {
    return this.userService.getData();
  }
}
