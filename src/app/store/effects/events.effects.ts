import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';


import { Router } from '@angular/router';
import { catchError, delay, map, tap, mergeMap, switchMap } from 'rxjs/operators';



import * as authenticationActions from '../actions/auth.actions';
import { EventsService } from '../services/events.service';
import { fetchEventsSuccess, fetchEventsFailed } from '../actions/events.actions';


@Injectable()
export class EventsEffects {

  login = createEffect(
    () => this.actions.pipe(
      ofType(authenticationActions.whoAmISuccess),
      switchMap((action: any) => {
        return from(this.eventsService.getEvents()).pipe(
          map((authData: any) => {
            console.log('Anwser api -> payload:', authData);
            if (authData && authData.error) {throw authData.error; }
            return fetchEventsSuccess({ payload: authData });
          }),
          catchError((err) => {
            console.log(err);
            return of(fetchEventsFailed({ payload: err.message}));
          })
        );
      })
    )
  );


  
  constructor(private actions: Actions,
              private eventsService: EventsService) {
  }
}
