import { Component } from '../../Facepalm';

import Header from '../Header';
import User from './User';
import Footer from '../Footer';
import { AUTH_HTTP } from '../../api/http.service.js'
import { AUTH_SERVICE } from '../../api/login.service.js'

class UserInfo extends Component {
    constructor() {
        super();

        this.state = {
            userData: null,
            link: "user",
            span: "user",
        }

        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

        this.header = new Header();
        this.user = new User();
        this.footer = new Footer();

        this.getUserData();
        this.setUserName();
    }
    
    setUserName(){
        this.state.span = AUTH_SERVICE.claims.username;
    }

    getUserData() {
        return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/user/my_info')
            .then(userData => {
                this.updateState({ userData });
            });
    }

    render() {
        const { userData, link, span } = this.state;

        return [
			this.header.update({ link, span }),
			this.user.update({ userData }),
			this.footer.update(),
		];
    }
}

export default UserInfo; 
