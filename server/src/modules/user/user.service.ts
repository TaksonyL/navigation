import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAll(): string {
    return 'Hello World!';
  }
}
