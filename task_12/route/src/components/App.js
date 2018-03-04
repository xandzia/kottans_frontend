import { Component } from '../Facepalm';
import Login from './Login';
import Singup from './Singup';


//import { bindAll } from '../utils';

class App extends Component {
   constructor({ host }) {
       super();
       
       this.state = {};
       
       this.host = host;
        console.log(this.host);

       this.login = new Login({});
       this.singup = new Singup({});
       
//       bindAll(this, '');
   }
    
    render() {
        return [
            this.login.update({}),
            this.singup.update({}),
        ]
    }

}

export default App;