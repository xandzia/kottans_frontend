import { Component } from '../../Facepalm';
import { toHtml } from '../../utils/index';
import { bindAll } from '../../utils';
import { AUTH_HTTP } from '../../api/http.service';
import { AUTH_SERVICE } from '../../api/login.service';

class User extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('main');
        this.host.classList.add('main');

        bindAll(this, 'handleSubmit');
        this.host.addEventListener('click', this.handleSubmit);
    }

    handleSubmit(ev) {
        console.log('clear');
        if (ev.target.dataset.action === 'logout') {
            AUTH_SERVICE.clearStorage();
        };
    }

    render() {
        const { userData } = this.props;
        console.log('user info', userData);

        const html = `
                <table>
				    <caption>User Info</caption>
				    <tbody id="table">
				    </tbody>
			     </table>
                <div class="btn-group">
                    <a href="#"><button class="button">Pizzas</button></a>
                    <a href="#/login"><button class="button" data-action="logout">Logout</button></a>
                </div>`;
        const user = toHtml(html);
        const table = user.getElementById('table');

        for (let key in userData) {
            const row = toHtml(`
					<tr>
						<td>${key}:</td>
						<td>${userData[key]}</td>
					</tr>
				`);
            table.append(row);
        }

        return user;
    }
}

export default User;
