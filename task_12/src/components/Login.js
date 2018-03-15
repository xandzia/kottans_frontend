import { Component } from '../Facepalm';
import { bindAll } from '../utils';
import { AUTH_SERVISE } from '../store/login.service';

class Login extends Component {
   constructor(props) {
       super(props);
              
       this.host = document.createElement('form');
       this.host.classList.add('form');
       
       bindAll(this, 'handleSubmit');
       this.host.addEventListener('submit', this.handleSubmit );
   }
    
    handleSubmit(ev) {
        ev.preventDefault();
                
        const userName = event.target.uname.value.trim();
        const password = event.target.psw.value.trim();
//        console.log('user-target', this.props);
//        this.props.user(userName);
        AUTH_SERVISE.login({userName, password})
            .then(result => {
                console.log(AUTH_SERVISE.token);
            },
            status => {
                console.log(status);
            }
            )
            .catch(err => {
//            console.log("err", err);
            if (err === "400") {
                
            }
        })
        
//        console.log('login-props', this.props);
//        console.log('LOGIN','userName:', userName, 'password:', password);
//        window.location.hash = '#/user';
    }
    
    render() {
        return `
          <div class="avatar"><img src="" alt="Avatar" class="avatar"></div>
            <input type="text" placeholder="Username" name="uname" required>
            <input type="password" placeholder="Password" name="psw" required>

            <button type="submit" id="login">Login</button>
            <a href="/#/singup">Sign Up</a>
            <p class="error-text"></p>`;
//        <a href="#">MAIN</a>`;
//            <label for="psw"><b>Password</b></label>
    }
    

}

export default Login;
