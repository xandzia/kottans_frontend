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
        console.log(this.props);
        return `<div class="main"><h1>Hello ${this.props.username}</h1>
                <a href="#login">LOG OUT</a></div>`;
    }

}

export default App;