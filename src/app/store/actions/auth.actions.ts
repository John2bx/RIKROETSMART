import { createAction, props } from '@ngrx/store';

export const logingIn = createAction('[Authentication] Login attempt start', props<{ email: any; password: any; }>());
export const loginSuccess = createAction('[Authentication] Login attempt success', props<{ payload: any }>());
export const loginFailed = createAction('[Authentication]  Login attempt failed', props<{ errorMessage: string }>());
export const AuthInfoRetrieved = createAction('[Authentication]  Auth Info Retrieved', props<{ status: number, isError: boolean, token: any, userInfo: any }>());
export const whoAmISuccess = createAction('[Authentication] Who Am I attempt success', props<{ payload: any }>());
export const whoAmIFailed = createAction('[Authentication]  Who Am I attempt failed', props<{ errorMessage: string }>());
export const logOut = createAction('[Authentication] Log Out');

// ff