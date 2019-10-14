import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';


import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, delay, map, tap, mergeMap, switchMap } from 'rxjs/operators';
import { UserStorageService, LocalStorageUserInfo } from '../services/userstorage.service';



@Injectable()
export class CandidatesEffects {

  // login = createEffect(
  //   () => this.actions.pipe(
  //     ofType(authenticationActions.loginSuccess),
  //     switchMap((action: any) => {
  //       return from(this.mailService.getInbox()).pipe(
  //         map((authData: any) => {
  //           console.log('Anwser api -> payload:', authData);
  //           if (authData && authData.error) throw authData.error;
  //           return whoAmISuccess({ payload: authData })
  //         }),
  //         catchError((err) => {
  //           console.log(err);
  //           return of(whoAmIFailed({ errorMessage: err.message}))
  //         })
  //       )
  //     })
  //   )
  // )


  
  // constructor(private actions: Actions,
  //             private router: Router,
  //             private userStorageService: UserStorageService,
  //             private mailService: MailboxService,
  //             private userService: UserService,
  //             private store$: Store<AppState>) {
  //   //console.log(this.auth$.auth.currentUser);
  // }
}
