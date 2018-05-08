import { Component } from '../Facepalm';
import { toHtml } from '../utils/index';
import PizzaCompon from './PizzaCreate/PizzaCompon';

class Main extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('main');
        
        this.pizzaList = new PizzaCompon();

    }

    render() {
        const { display } = this.props;
        
        const html = `<a class="addBtn" href="#/createpizza"><button class="btn add-pizza" style="display: ${ display };">
                <img class="fa-plus" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDAxLjk5NCA0MDEuOTk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDEuOTk0IDQwMS45OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzk0LDE1NC4xNzVjLTUuMzMxLTUuMzMtMTEuODA2LTcuOTk0LTE5LjQxNy03Ljk5NEgyNTUuODExVjI3LjQwNmMwLTcuNjExLTIuNjY2LTE0LjA4NC03Ljk5NC0xOS40MTQgICBDMjQyLjQ4OCwyLjY2NiwyMzYuMDIsMCwyMjguMzk4LDBoLTU0LjgxMmMtNy42MTIsMC0xNC4wODQsMi42NjMtMTkuNDE0LDcuOTkzYy01LjMzLDUuMzMtNy45OTQsMTEuODAzLTcuOTk0LDE5LjQxNHYxMTguNzc1ICAgSDI3LjQwN2MtNy42MTEsMC0xNC4wODQsMi42NjQtMTkuNDE0LDcuOTk0UzAsMTY1Ljk3MywwLDE3My41ODl2NTQuODE5YzAsNy42MTgsMi42NjIsMTQuMDg2LDcuOTkyLDE5LjQxMSAgIGM1LjMzLDUuMzMyLDExLjgwMyw3Ljk5NCwxOS40MTQsNy45OTRoMTE4Ljc3MVYzNzQuNTljMCw3LjYxMSwyLjY2NCwxNC4wODksNy45OTQsMTkuNDE3YzUuMzMsNS4zMjUsMTEuODAyLDcuOTg3LDE5LjQxNCw3Ljk4NyAgIGg1NC44MTZjNy42MTcsMCwxNC4wODYtMi42NjIsMTkuNDE3LTcuOTg3YzUuMzMyLTUuMzMxLDcuOTk0LTExLjgwNiw3Ljk5NC0xOS40MTdWMjU1LjgxM2gxMTguNzcgICBjNy42MTgsMCwxNC4wODktMi42NjIsMTkuNDE3LTcuOTk0YzUuMzI5LTUuMzI1LDcuOTk0LTExLjc5Myw3Ljk5NC0xOS40MTF2LTU0LjgxOUM0MDEuOTkxLDE2NS45NzMsMzk5LjMzMiwxNTkuNTAyLDM5NCwxNTQuMTc1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
            add new pizza
        </button><a>`;
        const addPizza = toHtml(html);
        return [
            addPizza,
            this.pizzaList.update(),
        ]
    }
}

export default Main;
