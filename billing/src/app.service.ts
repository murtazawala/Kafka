import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user-request.dto';
import { OrderCreatedEvent } from './events/created-order.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(order: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(order.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of ${order.price}...`,
        );
      });
  }
}
