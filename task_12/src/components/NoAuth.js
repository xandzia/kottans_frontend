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
            addBtn: 'none',
        }

        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();

    }
    render() {
        const { link, span, addBtn } = this.state;
        console.log(this.state)
        
        return [
            this.header.update({ link, span }),
            this.main.update({ addBtn }),
            this.footer.update(),
                ]
    }
}
export default NoAuth;