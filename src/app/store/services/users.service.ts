import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map, catchError, retryWhen, delay, take } from 'rxjs/operators';


import { Router } from '@angular/router';
import { AbstractApiService } from './abstract-api.service';

import { Store, select } from '@ngrx/store';

import { State } from '../../store';


@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractApiService {

  private WHOAMI_URL = '/api/user/whoami/';

  constructor(protected _http: HttpClient,
              protected store: Store<any>,
              private router: Router) {
    super(store, _http);

  }

  public whoami(): any {
    return this.get(this.WHOAMI_URL).pipe(
      map((res) => {
        console.log('resp:', res);
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }



}
