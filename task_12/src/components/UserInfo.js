import { Component } from '../Facepalm';

import Header from './Header';
import User from './User';
import Footer from './Footer';
import { AUTH_HTTP } from '../auth/http.service.js'

class UserInfo extends Component {
	constructor() {
		super();

		this.state = {
			userData: null,
		}

		this.host = document.createElement('div');
		this.host.classList.add('userInfo');

		this.header = new Header();
		this.user = new User();
		this.footer = new Footer();

		this.getUserData();
	}

    getUserData() {
		return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/user/my_info')
			.then(userData => {
            console.log('userData',userData);
            this.updateState({ userData });
        });
	}

	render() {
		const { userData } = this.state;

		return [
			this.header.update(),
			this.user.update({ userData }),
			this.footer.update(),
		];
	}
}

export default UserInfo; 
