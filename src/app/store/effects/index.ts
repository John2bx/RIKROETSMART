import { RouterEffects } from './router.effect';
import { AuthEffects } from './auth.effects';
import { MailEffects } from './mails.effects';
import { EventsEffects } from './events.effects';
import { ClientsEffects } from './clients.effects';
import { CandidatesEffects } from './candidates.effects';

export const effects: any[] = [RouterEffects, AuthEffects, MailEffects, EventsEffects,
ClientsEffects, CandidatesEffects, AuthEffects];

export * from './router.effect';
