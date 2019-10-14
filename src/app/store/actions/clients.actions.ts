import { createAction, props } from '@ngrx/store';

export const fetchClients = createAction('[Clients] Fetching clients', props<{ payload: any }>());
export const fetchClientsSuccess = createAction('[Clients] Succesfully fetched clients', props<{ payload: any }>());
export const fetchClientsFailed = createAction('[Clients] Failed fetching clients', props<{ payload: any }>());
export const createClientFailed = createAction('[Clients] Failed creating client', props<{ payload: any }>());
export const createClientSuccess = createAction('[Clients] Succesfully created client', props<{ payload: any }>());
export const createClient = createAction('[Clients] Creating client', props<{ payload: any }>());
export const deleteClient = createAction('[Clients] Deleting client', props<{ payload: any }>());
export const deleteClientSuccess = createAction('[Clients] Succesfully delete client', props<{ payload: any }>());
export const deleteClientFailed = createAction('[Clients] Failed deleting client', props<{ payload: any }>());


// // ff