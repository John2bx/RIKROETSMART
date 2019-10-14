import * as authenticationActions from '../actions/auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialClientsState } from './clients.state';



export const ClientsReducer = createReducer(
  initialClientsState,

  
  
  on(authenticationActions.logOut, (state, action) => {
    return initialClientsState;
  })

);
