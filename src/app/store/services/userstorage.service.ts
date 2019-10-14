import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as AuthActions from '../actions/auth.actions';
// import { User } from '../model/user.model';



import { State } from '../../store';


export class LocalStorageUserInfo {
  constructor(public token: string,
              public id: any,
              ) {
  }
}

@Injectable()
export class UserStorageService {

  public static USERINFO_LOCAL_PROPERTY = 'AUTH_KEY';

  constructor(public store$: Store<State>) {
  }

  public init(): any {
    if (this.getUserToken() !== '') {
      const user = {};
      user['id'] = this.getUserId();
      const authInfo = {
        status: 200,
        isError: false,
        token: this.getUserToken(),
        userInfo: user
      };

      console.log('Check existing auth token...>', authInfo);

      this.store$.dispatch(AuthActions.AuthInfoRetrieved(authInfo));
    }
  }

  public getUserId(): string {
    return this.getLocalUserInfo().id;
  }

  public getUserToken(): string {
    return this.getLocalUserInfo().token;
  }

  

  public getLocalUserInfo(): LocalStorageUserInfo {
    const localJson = localStorage.getItem(UserStorageService.USERINFO_LOCAL_PROPERTY);
    if (localJson) {
      const localUser = JSON.parse(localJson);
      console.log('Userstorage localJson...>', localJson);

      return new LocalStorageUserInfo(localUser.valueOf().token, localUser.valueOf().id);
    }
    return new LocalStorageUserInfo('', '');
  }

  public setLocalUserInfo(userInfo: LocalStorageUserInfo | any): void {
    userInfo = userInfo || new LocalStorageUserInfo('', '');

    localStorage.setItem(UserStorageService.USERINFO_LOCAL_PROPERTY, JSON.stringify(userInfo));
  }
}
