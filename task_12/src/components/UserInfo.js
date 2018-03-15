import { Component } from '../Facepalm';
import { toHtml } from '../utils/index';

class UserInfo extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('main');
		this.host.classList.add('main');
        
	}

	render() {
        const html = `<div>
                        <a class="org" href="#">USER</a>
                        <a class="map" href="#">PIZZAS</a>
                        <a class="tel" href="tel:57778887">577-788-87</a>
                    </div>`;
        const user = toHtml(html);

        return user;
	}
}

export default UserInfo;
