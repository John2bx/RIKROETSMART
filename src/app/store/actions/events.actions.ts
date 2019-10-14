import { createAction, props } from '@ngrx/store';

export const fetchEvents = createAction('[Events] Fetching events', props<{ payload: any }>());
export const fetchEventsSuccess = createAction('[Events] Succesfully fetched events', props<{ payload: any }>());
export const fetchEventsFailed = createAction('[Events] Failed fetching candidates', props<{ payload: any }>());
export const createEventFailed = createAction('[Events] Failed creating event', props<{ payload: any }>());
export const createEventSuccess = createAction('[Events] Succesfully created event', props<{ payload: any }>());
export const createEvent = createAction('[Events] Creating event', props<{ payload: any }>());
export const deleteEvent = createAction('[Events] Deleting event', props<{ payload: any }>());
export const deleteEventSuccess = createAction('[Events] Succesfully delete event', props<{ payload: any }>());
export const deleteEventFailed = createAction('[Events] Failed deleting event', props<{ payload: any }>());
