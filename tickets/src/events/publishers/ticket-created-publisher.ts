import { Publisher, Subjects, TicketCreatedEvent } from '@gajdorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
