import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto/get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users = [
    { userId: '1', stripeUserId: '1' },
    { userId: '2', stripeUserId: '22' },
    { userId: '3', stripeUserId: '333' },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
