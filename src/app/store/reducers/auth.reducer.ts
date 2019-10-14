import * as authenticationActions from '../actions/auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';



export const AuthReducer = createReducer(
  initialAuthState,

  on(authenticationActions.logingIn, (state) => {
    return ({ ...state, isLoading: true});
  }),
  on(authenticationActions.loginSuccess, (state, action) => {
    return ({ ...state, token: action.payload.token});
  }),
  on(authenticationActions.whoAmISuccess, (state, action) => {
    return ({ ...state, currentUser: action.payload});
  }),
  on(authenticationActions.logOut, (state, action) => {
    return initialAuthState;
  }),
  on(authenticationActions.AuthInfoRetrieved, (state,action) => {
    return ({...state, token: action.token, isLoggedIn: true, currentUser: null, loading: true, error: false})
  })

);
