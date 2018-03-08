import { Component } from '../Facepalm';
import { bindAll } from '../utils';

class Login extends Component {
   constructor(props) {
       super(props);
       
//       const { userName } = this.props;
       
       this.host = document.createElement('form');
       this.host.addEventListener('submit', this.handleSubmit );
       bindAll(this, 'handleSubmit');
       console.log('login-props', this.props);
   }
    
    handleSubmit() {
        event.preventDefault();
                
        const userName = event.target.elements[0].value.trim();
        const password = event.target.elements[1].value.trim();
                    
        console.log('LOGIN','uname:', userName, 'password:', password);
    }
    
    render() {
        return `
      <figure class="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
          <figcaption class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Name" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit" class="signupbtn" id="singUp"><a href="#singup">Sign Up</a></button>
            <button type="submit" id="login">Login</button>
          </figcaption>
      </figure>
        <a href="#">MAIN</a>`;
    }
    

}

export default Login;
