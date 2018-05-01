import { Component } from '../Facepalm';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class NoAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "login",
            span: "login",
            display: 'none',
        }

        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();

    }
    render() {
        const { link, span, display } = this.state;
        console.log('noauth', this.state)
        
        return [
            this.header.update({ link, span }),
            this.main.update({ display }),
            this.footer.update(),
                ]
    }
}
export default NoAuth;