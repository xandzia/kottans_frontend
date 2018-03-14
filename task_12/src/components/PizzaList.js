import { Component } from '../Facepalm';

class PizzaList extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('section');
        this.host.classList.add('pizzas');

	}

	render() {
        const arr = [];
        for (let i = 1; i < 13; i++) {
            const sect = `<figure class="pizza" aria-label="pizza_ninja" tabindex=0>
                        <img src="img/pizza.png" alt="pizza with sausage">
                        <figcaption class="pizza-info">
                        <div class="left-info">
                            <time>02-55-87</time>
                            <time datetime="00:00:00" class="eta">ETA:<span>1&nbsp;min</span></time>
                        </div>
                        <div class="right-info">
                            <span class="price">$15</span>
                            <span class="number">#1</span>
                        </div>
                        </figcaption>
                    </figure>`;
        arr.push(sect);
        }
        return arr;
	}
}

export default PizzaList;
