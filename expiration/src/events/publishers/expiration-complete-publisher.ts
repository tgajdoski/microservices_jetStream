import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@gajdorg/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
