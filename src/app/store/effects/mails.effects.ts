import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';


import { Router } from '@angular/router';
import { catchError, delay, map, tap, mergeMap, switchMap } from 'rxjs/operators';
import { UserStorageService, LocalStorageUserInfo } from '../services/userstorage.service';



import * as authenticationActions from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { State } from '..';
import { UserService } from '../services/users.service';
import { MailboxService } from '../services/mailbox.service';
import { fetchIncomingMailsSuccess, fetchIncomingMails, fetchOutgoingMails, fetchOutgoingMailsSuccess } from '../actions/mails.actions';


@Injectable()
export class MailEffects {

  fetchIncomingMails = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.whoAmISuccess),
      switchMap((action: any) => {
        return from(this.mailService.getInbox()).pipe(
          map((mails: any) => {
            console.log('incomingmails:', mails);
            if (mails && mails.error) {throw mails.error; }
            return fetchIncomingMailsSuccess({ payload: mails });
          }),
          catchError((err) => {
            console.log(err);
            return of(fetchIncomingMails({payload: ''}));
          })
        );
      })
    )
  );
  fetchOutgoingMails = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.whoAmISuccess),
      switchMap((action: any) => {
        return from(this.mailService.getOutbox()).pipe(
          map((mails: any) => {
            console.log('incomingmails:', mails);
            if (mails && mails.error) {throw mails.error; }
            return fetchOutgoingMailsSuccess({ payload: mails });
          }),
          catchError((err) => {
            console.log(err);
            return of(fetchOutgoingMails({payload: ''}));
          })
        );
      })
    )
  );


  
  constructor(private actions: Actions,
              private router: Router,
              private userStorageService: UserStorageService,
              private mailService: MailboxService,
              private userService: UserService,
              private store$: Store<State>) {
  }
}
