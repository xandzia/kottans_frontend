import { Component } from '../Facepalm';
import Login from './Login';
import Singup from './Singup';


import { bindAll } from '../utils';

class App extends Component {
   constructor(props) {
       super(props);
       
       this.host = document.createElement('div');

   }
    
    onBeforeUpdate(nextProps) {
    }
    
    render() {
        return `<h1>MAIN$</h1>
                <a href="#login">LOGIN</a>`;
    }

}

export default App;