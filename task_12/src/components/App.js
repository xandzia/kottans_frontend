import '../css/normalize.css';
import '../css/style.scss';

import { Component } from '../Facepalm';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { AUTH_SERVICE } from '../auth/login.service.js'

import { bindAll } from '../utils';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            link: "user",
            span: "user",
        }
        
        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
        
        this.setUserName();

    }
    
    setUserName(){
        this.state.span = AUTH_SERVICE.claims.username;
    }


    onBeforeUpdate(nextProps) {}

    render() {
        const { link, span } = this.state;
        console.log('props',this.props);

        return [
            this.header.update({ link, span }),
			this.main.update(),
			this.footer.update(),
        ];
        //                `<div class="main"><h1>Hello ${this.props.username}</h1>
        //                <a href="#login">LOG OUT</a></div>`;
    }

}

export default App;