import { Component } from '../Facepalm';
import { bindAll } from '../utils';

class Singup extends Component {
   constructor(props) {
       super(props);
       
       this.state = {};
       
       this.host = document.createElement('form');
       
//       bindAll(this, '');
   }
    
    render() {
        
        return `
    <p>Create an account</p>
    <hr>
      <figure class="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
          <figcaption class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Name" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>

            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>
          </figcaption>
      </figure>`;
        
    }

}

export default Singup;
