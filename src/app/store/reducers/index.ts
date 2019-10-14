import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './auth.reducer';
import { AuthState } from './auth.state';
import { MailState } from './mails.state';
import { CandidateState } from './candidates.state';
import { EventsState } from './events.state';
import { ClientsState } from './clients.state';
import { MailReducer } from './mails.reducer';
import { CandidateReducer } from './candidates.reducer';
import { EventsReducer } from './events.reducer';
import { ClientsReducer } from './clients.reducer';

export interface RouterStateUrl
{
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State
{
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    auth: AuthState;
    mails: MailState;
    candidates: CandidateState;
    events: EventsState;
    clients: ClientsState;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer,
    auth: fromAuth.AuthReducer,
    mails: MailReducer,
    candidates: CandidateReducer,
    events: EventsReducer,
    clients: ClientsReducer,
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl
    {
        const {url} = routerState;
        const {queryParams} = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while ( state.firstChild )
        {
            state = state.firstChild;
        }
        const {params} = state;

        return {
            url,
            queryParams,
            params
        };
    }
}
