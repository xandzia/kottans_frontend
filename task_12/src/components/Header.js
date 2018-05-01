import { Component } from '../Facepalm';
import { toHtml } from '../utils/index';

class Header extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('header');
        this.host.classList.add('header-top');
    }

    clock(elem) {
        function updateClock(elem) {
            const time = new Date(),
                h = `${time.getHours()}`.padStart(2, 0),
                m = `${time.getMinutes()}`.padStart(2, 0),
                s = `${time.getSeconds()}`.padStart(2, 0),
                stringDate = [h, m, s].join(":");
            elem.innerHTML = stringDate;
        };

        setInterval(() => {
            updateClock(elem);
        }, 500);
    }

    render() {
        const { link, span, display } = this.props;
        const html = `<div class="clock">
            <img class="far fa-clock" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5OS45OTUgMjk5Ljk5NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk5Ljk5NSAyOTkuOTk1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0OS45OTUsMEM2Ny4xNTYsMCwwLDY3LjE1OCwwLDE0OS45OTVzNjcuMTU2LDE1MCwxNDkuOTk1LDE1MHMxNTAtNjcuMTYzLDE1MC0xNTBTMjMyLjgzNCwwLDE0OS45OTUsMHogICAgIE0yMTQuODQyLDE3OC41MjRIMTUxLjI1Yy0wLjIxNSwwLTAuNDE1LTAuMDUyLTAuNjI4LTAuMDZjLTAuMjEzLDAuMDEtMC40MTIsMC4wNi0wLjYyOCwwLjA2ICAgIGMtNS43MjksMC0xMC4zNzQtNC42NDUtMTAuMzc0LTEwLjM3NFY2Mi4yNDljMC01LjcyOSw0LjY0NS0xMC4zNzQsMTAuMzc0LTEwLjM3NHMxMC4zNzQsNC42NDUsMTAuMzc0LDEwLjM3NHY5NS41MjdoNTQuNDcgICAgYzUuNzI5LDAsMTAuMzc0LDQuNjQ1LDEwLjM3NCwxMC4zNzRDMjI1LjIxMiwxNzMuODc5LDIyMC41NzEsMTc4LjUyNCwyMTQuODQyLDE3OC41MjR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGOEY1RjUiIGRhdGEtb2xkX2NvbG9yPSIjRUVFNUU1Ij48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="clock">
            <span id="clock"></span>
        </div>
        <a href="#" class="logo" style="display: ${ display };">
            <img src="img/logo.svg" alt="pizza and ninja turtle">
        </a>
        <a id="link" href="#/${ link }" class="btn login">
            <span class="green-white"><img src="img/green-ninja-turtle.png" alt="ninja turtle face"></span>
            <span class="innerLogin">${ span }</span>
        </a>`;
        const header = toHtml(html);
        
        const logo = header.querySelector(".logo");
        console.log("logo", logo);
        
        const clock = header.getElementById('clock');
        this.clock(clock);

        return header;
    }
}

export default Header;