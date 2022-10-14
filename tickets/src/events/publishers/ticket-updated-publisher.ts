import { Publisher, Subjects, TicketUpdatedEvent } from '@gajdorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
