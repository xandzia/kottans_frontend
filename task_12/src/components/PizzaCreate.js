import { Component } from '../Facepalm';
import { PIZZA_DATA } from '../auth/pizza-data';
import { toHtml } from '../utils/index';
import { AUTH_SERVICE } from '../auth/login.service.js'
import { PIZZA_DRAW } from './pizza-draw'

import Header from './Header';
import Footer from './Footer';

class PizzaCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createPizza: {
                size: '60',
                checkedIngredient: [],
                checkIngrId: [],
                tags: [],
            },
            link: "user",
            span: "user",
		};

        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

		this.header = new Header();
		this.footer = new Footer();
		this.handleClick = this.handleClick.bind(this);
        this.setUserName();

    }
    
    renderCollect() {      
        let html = `<form id="create">
            <label>Pizza Name:
              <input type="text" name="name" required min="3" max="24">
              </label>
                <label for="size">Size:
              <label>30
                <input type="radio" name="size" value="30" data-size="size">
              </label>
              <label>45
                <input type="radio" name="size" value="45" data-size="size">
              </label>
              <label>60
                <input type="radio" name="size" value="60" data-size="size" checked>
              </label>
          </label>
          <label>Ingredients:</label>
          <div>
              ${PIZZA_DATA.ingredients.reduce((html, ingr) => {
                  return html +=
                      `
                        <label title="${ingr.name}">
                            <img src="https://pizza-tele.ga/${ingr.image_url}" alt="${ingr.name}" title="${ingr.description}">
                            <input type="checkbox" value="${ingr.name}" data-id="${ingr.id}" data-ingredient="ingredient">
                        </label>
                      `;
              }, '')}
          </div>
          <div>
              ${PIZZA_DATA.tags.reduce((html, tag) => {
                  return html +=
                      `
                        <label title="${tag.description}">
                            ${tag.name}
                            <input type="checkbox" name="${tag.name}" data-id="${tag.id}">
                        </label>
                      `;
              }, '')}
          </div>
        </form>`
//        this.host.insertAdjacentHTML('beforeend', html)
        const collect = document.querySelector('.collect')
        collect.insertAdjacentHTML('beforeend', html)
        let form = document.getElementById('create')
        form.addEventListener('change', ev => {
            this.handleClick(ev)
        })
    }
    handleClick(ev) {
        if (ev.target.dataset.ingredient === 'ingredient') {
			const ingredientsInputs = document.querySelectorAll('[data-ingredient]');
			const checkIngr = [];
			const checkIngrId = [];
			ingredientsInputs.forEach(ingredientInput => {
				if (ingredientInput.checked) {
					checkIngr.push(ingredientInput.value);
					checkIngrId.push(parseInt(ingredientInput.dataset.id));
				}
			});

			this.state.createPizza.checkedIngredient = checkIngr;
			this.state.createPizza.checkIngrId = checkIngrId;
                
			const { checkedIngredient, size } = this.state.createPizza;
			PIZZA_DRAW.checkedIngredient(checkedIngredient, size);
		}
        if (ev.target.dataset.size === 'size') {
            const sizes = document.querySelectorAll('[data-size]');
			sizes.forEach(size => {
				if (size.checked) {
					const newSize = ev.target.value;
                    this.state.createPizza.size = newSize;
//                console.log('value', this.state.createPizza)
                    
                    const { checkedIngredient, size } = this.state.createPizza;
                    PIZZA_DRAW.checkedIngredient(checkedIngredient, size);
				}
			});
        }

    }
    
    setUserName(){
        this.state.span = AUTH_SERVICE.claims.username;
    }

    render() {
        const { link, span } = this.state;
        Promise.all([PIZZA_DATA.getIngredients(), PIZZA_DATA.getTags()])
            .then(() => {
            this.renderCollect()
            PIZZA_DRAW.init({
                host: canvashost,
                ingredients: PIZZA_DATA.ingredients
            })
        })
        const html = `
            <main>
                <h1>Create Pizza</h1>
                <section class='canvas'></section>
                <section class='collect'></section>
            </main>
        `;
		const main = toHtml(html);
        let canvashost = main.querySelector('.canvas')
        return [
            this.header.update({ link, span }), 
            main, 
            this.footer.update()
        ];
    }
}

export default PizzaCreate;