import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AbstractApiService } from './abstract-api.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class MailboxService extends AbstractApiService {

  constructor(
    protected _http: HttpClient,
    protected store: Store<any>
    ) {
super(store, _http);

}

  getInbox(): Observable<any> {
    return this.get('/api/mail/in/').pipe(
      map((res) => {
        console.log('resp:', res);
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
  getOutbox(): Observable<any> {
    return this.get('/api/mail/out/').pipe(
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
