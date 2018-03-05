import { Component } from '../Facepalm';
import { bindAll } from '../utils';

class Login extends Component {
   constructor(props) {
       super(props);
       
       this.host = document.createElement('form');
       this.host.addEventListener('submit', this.handleSubmit );
       bindAll(this, 'handleSubmit');
   }
    
    handleSubmit() {
        event.preventDefault();
                
        const uname = event.target.elements[0].value.trim();
        const password = event.target.elements[1].value.trim();
                    
        console.log('LOGIN','uname:', uname, 'password:', password);
//        return [uname, password];
    }
    
    render() {
//        const { uname, password } = this.props;
        return `
      <figure class="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
          <figcaption class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Name" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>
            <button type="submit" id="login">Login</button>
          </figcaption>
      </figure>`;

//  <div class="container" style="background-color:#f1f1f1">
//    <button type="button" class="cancelbtn">Cancel</button>
//    <span class="psw">Forgot <a href="#">password?</a></span>
//  </div>`;
    }
    

}

export default Login;
