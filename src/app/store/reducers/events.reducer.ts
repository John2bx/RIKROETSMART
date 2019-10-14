import * as authenticationActions from '../actions/auth.actions';
import * as eventsActions from '../actions/events.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialEventsState } from './events.state';



export const EventsReducer = createReducer(
  initialEventsState,

  
  on(eventsActions.fetchEventsSuccess, (state, action) => {
    return {...state, events: action.payload};
  }),
  on(authenticationActions.logOut, (state, action) => {
    return initialEventsState;
  })

);
