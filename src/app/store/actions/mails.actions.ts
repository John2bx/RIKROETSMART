import { createAction, props } from '@ngrx/store';

export const fetchIncomingMails = createAction('[Mailing] Fetching incoming mails', props<{ payload: any }>());
export const fetchIncomingMailsSuccess = createAction('[Mailing] Succesfully fetched incoming mails', props<{ payload: any }>());
export const fetchOutgoingMails = createAction('[Mailing] Fetching outgoing mails', props<{ payload: any }>());
export const fetchOutgoingMailsSuccess = createAction('[Mailing] Succesfully fetched outgoing mails', props<{ payload: any }>());

