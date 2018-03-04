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
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <button type="submit" class="signupbtn">Sign Up</button>`;
    }

}

export default Singup;
