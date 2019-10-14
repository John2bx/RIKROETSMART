import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';


import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, delay, map, tap, mergeMap, switchMap } from 'rxjs/operators';
import { UserStorageService, LocalStorageUserInfo } from '../services/userstorage.service';

import {
  loginSuccess,
  whoAmISuccess,
  whoAmIFailed,
  loginFailed
} from '../actions/auth.actions';

import * as authenticationActions from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { UserService } from '../services/users.service';


@Injectable()
export class AuthEffects {

  login = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.logingIn),
      switchMap((action: any) => {
        return from(this.authService.login({email: action.email, password: action.password})).pipe(
          map((authData: any) => {
            if (authData && authData.error) {throw authData.error; }
            return loginSuccess({ payload: authData });
          }),
          catchError((err) => {
            return of(loginFailed({ errorMessage: err.message}));
          })
        );
      })
    )
  );


  loginSuccess = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.loginSuccess),
      map((action) => action.payload),
      tap((action) => {
        this.store$.select((state) => console.log('stateofstate', state));
        const info = new LocalStorageUserInfo(action.token, action.id);
        this.userStorageService.setLocalUserInfo(info);
        this.router.navigateByUrl('apps/mail-ngrx');
      })),  { dispatch: false }
  );
  

  getWhoAmi = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.loginSuccess, authenticationActions.AuthInfoRetrieved),
      switchMap((action: any) => {
        return from(this.userService.whoami()).pipe(
          map((whoAmIData: any) => {
            if (whoAmIData && whoAmIData.error) {throw whoAmIData.error; }
            return whoAmISuccess({ payload: whoAmIData });
          }),
          catchError((err) => {
            return of(whoAmIFailed({ errorMessage: err.message}));
          })
        );
      })
    )
  );
  logOut = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.logOut),
      tap((action) => {
        console.log('RESPONSE:', action);
       // this.store$.select((state)=> console.log('State', state))
        this.userStorageService.setLocalUserInfo({});
        this.router.navigateByUrl('/login');
      })),  { dispatch: false }
  );

  constructor(private actions: Actions,
              private router: Router,
              private userStorageService: UserStorageService,
              private authService: AuthService,
              private userService: UserService,
              private store$: Store<State>) {
  
  }
}
