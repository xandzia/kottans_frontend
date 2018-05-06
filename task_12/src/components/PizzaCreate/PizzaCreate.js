import { Component } from '../../Facepalm';
import { PIZZA_DATA } from '../../auth/pizza-data';
import { toHtml } from '../../utils/index';
import { AUTH_SERVICE } from '../../api/login.service.js'
import { PIZZA_DRAW } from './pizza-draw'

import Header from '../Header';
import Footer from '../Footer';

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
            <div class="form_create_div">Pizza Name:
              <input type="text" name="name" required min="3" max="24">
            </div>
            <div class="form_create_div">
                <label class="form_create_div-padding">Size:</label>
              <label class="ingredient-box-radio">
                <span>30</span>
                <input type="radio" name="size" value="30" data-size="size">
                <span class="checkmark"></span>
              </label>
              <label class="ingredient-box-radio">
                <span>45</span>
                <input type="radio" name="size" value="45" data-size="size">
                <span class="checkmark"></span>
              </label>
              <label class="ingredient-box-radio">
                <span>60</span>
                <input type="radio" name="size" value="60" data-size="size" checked>
                <span class="checkmark"></span>
              </label>
          </div>
          <div class="form_create_div">
            <label class="form_create_div-margin">Ingredients:</label><br>
              ${PIZZA_DATA.ingredients.reduce((html, ingr) => {
                  return html +=
                      `
                        <input type="checkbox" value="${ingr.name}" id="${ingr.id}" data-ingredient="ingredient">
                        <label title="${ingr.name}" class="ingredient-box" for="${ingr.id}">
                            <img src="https://pizza-tele.ga/${ingr.image_url}" alt="${ingr.name}" title="${ingr.description}">
                        </label>
                      `;
              }, '')}
          </div>
          <div class="form_create_div">
              ${PIZZA_DATA.tags.reduce((html, tag) => {
                  return html +=
                      `
                            <input type="checkbox" name="${tag.name}" id="tag-${tag.id}" data-tags="tags">
                        <label title="${tag.description}" class="tags-box" for="tag-${tag.id}">
                            ${tag.name}
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
        if (ev.target.dataset.size === 'tags') {
            const tags = document.querySelectorAll('[data-tags]');
			const checktags = [];
			tags.forEach(tag => {
				if (tag.checked) {
					checktags.push(tag.value);
				}
			});
			this.state.createPizza.tags = checktags;
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
                <div class="create-container">
                    <section class='canvas'></section>
                    <section class='collect'></section>
                </div>
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