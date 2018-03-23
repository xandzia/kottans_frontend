import { Component } from '../Facepalm';
import { toHtml } from '../utils/index';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('footer');
        this.host.classList.add('footer');

    }

    render() {
        const html = `<address>
                        <a class="org" href="#">Kottans,</a>
                        <a class="map" href="#">Kottans Str.1</a>
                        <a class="tel" href="tel:57778887">577-788-87</a>
                    </address>
                    <small>Pizza Manager &copy; 2018</small>`;
        const footer = toHtml(html);

        return footer;
    }
}

export default Footer;
