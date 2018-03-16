import { status, json } from '../utils';
import { AUTH_SERVICE } from './login.service.js';


class AuthHttpService {
	get(url, ) {
    console.log(AUTH_SERVICE, 'AUTH_SERVICE')
		if (!AUTH_SERVICE.isAuthorized) {
			throw new Error('Non-authorized request');
		}

		const headers = new Headers();

		headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
		headers.append('content-type', 'application/json');

		return fetch(url, {
			method: 'GET',
			headers,
		})
		.then(res => {
            if (res.ok || res.status === 400) return res;
	           console.log(res);
	       throw new Error(res.statusText);
        })
		.then(res => res.json())
	}

	post() {

	}

	patch() {

	}

}

export const AUTH_HTTP = new AuthHttpService();