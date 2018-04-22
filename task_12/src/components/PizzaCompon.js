import { Component } from '../Facepalm';
import { PIZZA_DATA } from '../auth/pizza-data';

class PizzaCreate extends Component {
    constructor(props) {
        super(props);

        this.host = document.createElement('section');
        this.host.classList.add('pizzas');

    }

    render() {
        PIZZA_DATA.getIngredients().then(ingredients => console.log(ingredients))
    }
}

export default PizzaCreate;