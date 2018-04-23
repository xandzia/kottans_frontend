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
                size: '',
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
//		this.handleResize = this.handleResize.bind(this);
//		this.handleSubmit = this.handleSubmit.bind(this);
//		this.renderAll();
        this.setUserName();

    }
    
    renderCollect() {      
        let html = `<form id="create">
            <label>Pizza Name:
              <input type="text" name="name" required min="3" max="24">
              </label>
                <label for="size">Size:
              <label>30
                <input type="radio" name="size" value="30">
              </label>
              <label>45
                <input type="radio" name="size" value="45">
              </label>
              <label>60
                <input type="radio" name="size" value="60">
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
//            console.log('change', ev)
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

			this.state.createPizza.checkedIngredient = checkIngr,
			this.state.createPizza.checkIngrId = checkIngrId,

//			this.state = Object.assign({}, this.state, {
//				ingredients: newIngredients,
//			});
			 console.log(this.state);
			const { checkedIngredient } = this.state.createPizza;
			PIZZA_DRAW.checkedIngredient(checkedIngredient);
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