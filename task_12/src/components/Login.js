//import './login.scss';

import { Component } from '../Facepalm';
import { bindAll, toHtml } from '../utils';
import { AUTH_SERVICE } from '../auth/login.service';

import Header from './Header';
import Footer from './Footer';


class Login extends Component {
   constructor(props) {
       super(props);
              
       this.host = document.createElement('div');
       
       this.header = new Header();
       this.footer = new Footer();
       
       bindAll(this, 'handleSubmit');
       this.host.addEventListener('submit', this.handleSubmit );
       this.host.addEventListener('click', this.handleFocus );
   }
    
    handleSubmit(ev) {
        ev.preventDefault();
        
                
        const username = event.target.uname.value.trim();
        const password = event.target.psw.value.trim();
        AUTH_SERVICE.login({username, password})
            .then(result => {
//            V1
//                const success = result.answer.success;
//                this.props.user(success);
//                console.log('success', result.answer.success);
                window.location.hash = '#/user';
//            V1
                console.log(AUTH_SERVICE.token);
                console.log(AUTH_SERVICE.claims);
            },
            data => {
                if (data.status === 400) {
                    document.querySelector('.error-text').textContent = data.answer.error;
                }
//            V1
//                const success = status.answer.success;
//                this.props.user(success);
//                console.log('success', status.answer.success);
//            V1
            }
            )
            .catch(err => {
                console.log("err", err);
            })
    }
    
    handleFocus(ev) {
        document.querySelector('.error-text').textContent = '';
    }
    
    
    render() {
        console.log('auth-servise:', AUTH_SERVICE.isAuthorized());
        
        const html = `<form id="login-form" class="form"><div class="avatar"><img src="" alt="Avatar" class="avatar"</div>
            <input type="text" placeholder="Username" name="uname" required>
            <input type="password" placeholder="Password" name="psw" required>

            <button type="submit" id="login">Login</button>
            <span class="error-text"></span>
            <a href="#/singup">Sign Up</a>
            </form>`;
        const form = toHtml(html);
        
        return [
            this.header.update(),
            form,
            this.footer.update(),
                ]
//        <a href="#">MAIN</a>`;
//            <label for="psw"><b>Password</b></label>
    }
}

export default Login;
