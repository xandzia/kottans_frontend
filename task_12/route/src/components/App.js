import { Component } from '../Facepalm';
import Login from './Login';
import Singup from './Singup';


import { bindAll } from '../utils';

class App extends Component {
   constructor({ host }) {
       super();
       
//       this.state = {
//           uname: null,
//           password: null,
//       };
       
       this.host = host;

       this.login = new Login({});
       this.singup = new Singup({});
       
//       bindAll(this, 'hSubmit');
   }
    
    render() {
        const { uname, password } = this.state;
        return [
//            this.login.update({ }),
            this.singup.update({}),
        ]
    }

}

export default App;