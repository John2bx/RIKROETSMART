import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store, select } from '@ngrx/store';

import { State } from '../../store';

export abstract class AbstractApiService {
	private http: HttpClient;
	private token: Observable<string>;

	constructor(
		protected store: Store<any>,
		protected _http: HttpClient) {
		this.http = _http;
		this.store.select((state) => state.auth.token).subscribe((token) => this.token = token);
	}

	protected get(url: string, options?): Observable<any> {
		console.log(this.requestHeaders(options), 'HEADERSSSS');
		return this.http.get(this.getFullUrl(url), this.requestHeaders(options));
	}

	protected getWithoutToken(url: string): Observable<any> {
		return this.http.get(this.getFullUrl(url));
	}

	protected getPlain(url: string): Observable<any> {
		return this.http.get(url);
	}

	protected post(url: string, body: any, options?): Observable<any> {
		return this.http.post(this.getFullUrl(url), body, this.requestHeaders(options));
	}

	protected postCustomUrl(url: string, body: any, options?): Observable<any> {
		return this.http.post(url, body, this.requestHeaders(options));
	}

	protected postWithoutToken(url: string, body: any) {
		return this.http.post(this.getFullUrl(url), body);
	}

	protected patch(url: string, body: any, options?): Observable<any> {
		return this.http.patch(this.getFullUrl(url), body, this.requestHeaders(options));
	}

	protected patchWithoutToken(url: string, body: any): Observable<any> {
		return this.http.patch(this.getFullUrl(url), body);
	}

	protected put(url: string, body: any, options?): Observable<any> {
		return this.http.put(this.getFullUrl(url), body, this.requestHeaders(options));
	}

	protected delete(url: string, options?): Observable<any> {
		return this.http.delete(this.getFullUrl(url), this.requestHeaders(options));
	}

	private getFullUrl(endpoint: string) {
		return environment.apiUrl + endpoint;
	}

	protected generalCall(typeOfCall: string, url: string, options?): Observable<any> {
		console.log(this.requestHeaders(options), options, 'REQUESTOPTIONS');
		return this.http.request(typeOfCall, this.getFullUrl(url), this.requestHeaders(options));
	}

	private requestHeaders(options?) {
		let headers;
		let newOptions;

		if (!this.token) {
			this.dispatchLoginExpired();
		}
		headers = new HttpHeaders({
			'Authorization': `TOKEN ${this.token}`
		});

		if (options) {
			if (options.headers && options.headers === 'pdf') {
				newOptions = { headers, responseType: 'blob' };
			}
			if (options.headers && options.headers === 'text') {
				newOptions = { headers, responseType: 'text' };
			}

			if (options.params) {
				newOptions = { params: options.params, headers };
			}
			if (options.body) {
				newOptions = { body: options.body, headers };
			}
			if (options.reportProgress) {
				newOptions = { reportProgress: true, observe: 'events', headers };
			}
		} else {
			newOptions = { headers };
		}
		return newOptions;
	}


	private dispatchLoginExpired() {
		// return this.store.dispatch(new AuthActions.LoginExpired());
	}
}
