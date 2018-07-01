import { Component } from '../../Facepalm';
import { toHtml } from '../../utils/index';
import { PIZZA_DATA } from '../../api/pizza-data';

class PizzaCompon extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('section');
        this.host.classList.add('pizzas');

    }
    
    pizzaList() {

    }

    render() {
        PIZZA_DATA
            .getUnacceotedPizzas(true, 12, 0)
            .then(res=>{
                console.log("PIZZA_DATA", res)
                const a = res.results;
            })
        const html = `
            <figure class="pizza" aria-label="pizza_ninja" tabindex=0>
                <img src="img/pizza.png" alt="pizza with sausage">
                <figcaption class="pizza-info">
                    <div class="left-info">
                        <div>02-55-87</div>
                        <div class="eta">ETA:
                            <span>1&nbsp;min</span>
                        </div>
                        </div>
                    <div class="right-info">
                    <span class="price">$15</span>
                <span class="number">#1</span>
                    </div>
                </figcaption>
            </figure>`;
        const pizza = toHtml(html);
        return pizza;
    }
}

export default PizzaCompon;

    