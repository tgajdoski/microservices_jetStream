import { Publisher, OrderCreatedEvent, Subjects } from '@gajdorg/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
