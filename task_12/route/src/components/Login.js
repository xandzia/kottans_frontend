import { Component } from '../Facepalm';
import { bindAll } from '../utils';

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
//        const password = event.target.psw.value.trim();
//        console.log('user-target', this.props);
        this.props.user(userName);
        
        console.log('login-props', this.props);
        console.log('LOGIN','userName:', userName);
        window.location.hash = '#main';
    }
    
    render() {
        return `
          <div class="avatar"><img src="/dist/a3008c245d4370a193f8469baba6d707.png" alt="Avatar" class="avatar"></div>
            <input type="text" placeholder="Username" name="uname" required>

            <button type="submit" id="login">Login</button>
            <a href="#singup">Sign Up</a>`;
//        <a href="#">MAIN</a>`;
//            <label for="psw"><b>Password</b></label>
//            <input type="password" placeholder="Enter Password" name="psw" required>
    }
    

}

export default Login;
