import '../css/normalize.css';
import '../css/style.scss';

import { Component } from '../Facepalm';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import Login from './Login';
//import Singup from './Singup';


import { bindAll } from '../utils';

class App extends Component {
   constructor(props) {
       super(props);
       
       this.host = document.createElement('div');
       
       this.header = new Header();
//       this.main = new Main();
//       this.footer = new Footer();

   }
    
    onBeforeUpdate(nextProps) {
    }
    
    render() {
//        console.log(this.props);
        return [
            this.header.update(),
//			this.main.update(),
//			this.footer.update(),
        ];
//                `<div class="main"><h1>Hello ${this.props.username}</h1>
//                <a href="#login">LOG OUT</a></div>`;
    }

}

export default App;