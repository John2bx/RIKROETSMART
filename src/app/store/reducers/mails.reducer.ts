import * as authenticationActions from '../actions/auth.actions';
import * as mailActions from '../actions/mails.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialMailState } from './mails.state';



export const MailReducer = createReducer(
  initialMailState,

  
 
  on(mailActions.fetchIncomingMailsSuccess, (state, action) => {
    return ({ ...state, incoming: action.payload});
  }),
  on(mailActions.fetchOutgoingMailsSuccess, (state, action) => {
    return ({ ...state, outgoing: action.payload});
  }),
  on(authenticationActions.logOut, (state, action) => {
    return initialMailState;
  })

);
