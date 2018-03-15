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
                
        const username = event.target.uname.value.trim();
        const password = event.target.psw.value.trim();
        AUTH_SERVISE.login({username, password})
            .then(result => {
                const success = result.answer.success;
                this.props.user(success);
                console.log('success', result.answer.success);
                window.location.hash = '#/user';
            },
            status => {
                const success = status.answer.success;
                this.props.user(success);
                console.log('success', status.answer.success);
            }
            )
            .catch(err => {
//            console.log("err", err);
            if (err === "400") {
                
            };
        })

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
