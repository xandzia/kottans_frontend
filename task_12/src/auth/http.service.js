import { status, json } from '../utils';
import { AUTH_SERVICE } from './login.service.js';


class AuthHttpService {
	get(url) {
		return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${AUTH_SERVICE.token}`
            })
		})
		.then(
            res => {
            if (res.ok || res.status === 400) return res;
	           console.log(res);
	       throw new Error(res.statusText);
        })
		.then(
            res => Promise.resolve(res.json()),
            res => Promise.reject(res.statusCode)
        )
	}
}

export const AUTH_HTTP = new AuthHttpService();