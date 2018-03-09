import { Component } from '../Facepalm';
import { bindAll } from '../utils';

class Singup extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('form');
        this.host.classList.add('form');

        //       bindAll(this, '');
    }
    
    render() {
        
        return `
          <div class="avatar"><img src="/dist/a3008c245d4370a193f8469baba6d707.png" alt="Avatar" class="avatar"></div>
            <input type="text" placeholder="Enter Name" name="uname" required>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
            <input type="text" placeholder="Enter Email" name="email" required>

            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>`;
        
    }

}

export default Singup;
