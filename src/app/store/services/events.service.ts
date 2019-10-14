import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { Label, LabelAdapter } from '../core/label.model';
// import { Message, MessageAdapter } from '../core/message.model';
// import { Thread, ThreadAdapter } from '../core/thread.model';
// import { BundleAdapter, Bundle } from '../core/bundle.model';
import { AbstractApiService } from './abstract-api.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends AbstractApiService {

  constructor(
    protected _http: HttpClient,
    protected store: Store<any>
    ) {
super(store, _http);

}

  getEvents(): Observable<any> {
    return this.get('/api/agenda/events/').pipe(
      map((res) => {
        console.log('resp:', res);
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }}
