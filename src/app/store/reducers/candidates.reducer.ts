import * as authenticationActions from '../actions/auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialCandidateState } from './candidates.state';



export const CandidateReducer = createReducer(
  initialCandidateState,

  
  
  on(authenticationActions.logOut, (state, action) => {
    return initialCandidateState;
  })

);
