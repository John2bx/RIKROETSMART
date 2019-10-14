import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map, catchError, retryWhen, delay, take } from 'rxjs/operators';


import { Router } from '@angular/router';
import { AbstractApiService } from './abstract-api.service';



import { State } from '../../store';
import { Store, select } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractApiService {

  private LOGIN_URL = '/api/user/login/';

  constructor(protected _http: HttpClient,
              protected store: Store<State>,
              private router: Router) {
    super(store, _http);

    // this.cu$ = this.store.pipe(select(selectUser));
    //
    // // check and see if we have a user, if so then get the data
    // // for the display
    // this.store.pipe(select(selectUser)).subscribe(currentUser => {
    //   if (currentUser) {
    //     this.store.dispatch(new All().fetchFirebaseArrayAction("new-test"));
    //   }
    // });
  }

  public login(credentials): any {
    console.log('Form: Login gegevens:', credentials);
    return this.postWithoutToken(this.LOGIN_URL, credentials).pipe(
      map((res) => {
        console.log('resp:', res);
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  // public registerUser(info: RegisterUserModel): Observable<RegisterUserResponseModel> {
  //   return this.postWithoutToken(this.REGISTER_USER_URL, info).pipe(
  //     map((response) => createRegisterUserResponse(response))
  //   );
  // }
  //
  // public whoami() {
  //   return this.get(this.WHOAMI).pipe(
  //     map((response) => toUser(response))
  //   );
  // }
  //
  // public resetPassword(email): Observable<any> {
  //   return this.get(this.RESET_PASSWORD + email, { headers: 'text' }).pipe(
  //     map((response) => {
  //       return response; // kind of useless
  //     }),
  //     catchError((error) => {
  //       throw error;
  //     })
  //   )
  // }
  //
  // public isAdmin(): Observable<boolean> {
  //   return this.roles$.pipe(
  //     map((roles) => {
  //       // each user must have 1 role at least!?
  //       if (!roles || roles.length < 1) {
  //         throw { error: 'error' };
  //       } else {
  //         return this.isAdminSync(roles);
  //       }
  //     }),
  //     retryWhen((error) => {
  //       // tslint:disable-next-line:no-magic-numbers
  //       return error.pipe(
  //         delay(1000),
  //         take(2));
  //     }),
  //     catchError(() => of(false))
  //   );
  // }
  //
  // public isAdminSync(roles: string[]) {
  //   return roles && roles.indexOf(this.ADMIN) >= 0;
  // }
  //
  // public isLoggedIn(): Observable<boolean> {
  //   return this.isLoggedIn$.pipe(
  //     map((loginStatus) => {
  //       if (!loginStatus) {
  //         this.store.dispatch(new AuthActions.LoginExpired());
  //         return false;
  //       }
  //       return true;
  //     }),
  //     catchError(() => of(false)));
  // }
  //
  // public fetchClientModel(): Observable<any> {
  //   return this.get(this.CLIENT_MODEL);
  // }
  //
  // public fetchUserQuota(): Observable<any> {
  //   return this.get(this.USER_QUOTA).pipe(
  //     map((response) => new UserQuotaEndpointModel(response)),
  //     catchError(() => of(false))
  //   );
  // }
  //
  // public isNotLogedIn(): Observable<boolean> {
  //   return this.isLoggedIn$.pipe(
  //     map((loginStatus) => {
  //       if (!loginStatus) {
  //         return true;
  //       }
  //       this.router.navigate(['/']);
  //       return false;
  //     }),
  //     catchError(() => of(false))
  //   );
  // }

}
