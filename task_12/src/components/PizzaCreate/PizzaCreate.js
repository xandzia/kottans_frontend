import { Component } from '../../Facepalm';
import { PIZZA_DATA } from '../../api/pizza-data';
import { toHtml } from '../../utils/index';
import { AUTH_SERVICE } from '../../api/login.service.js'
import { AUTH_HTTP } from '../../api/http.service.js'
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
		this.handleSubmit = this.handleSubmit.bind(this);
        this.setUserName();

    }
    
    renderCollect() {      
        let html = `<form id="create" action="#">
            <div class="form_create_div">Pizza Name:
              <input class="create-pizza-name" type="text" name="name" required min="3" max="24">
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
                            <input type="checkbox" name="${tag.name}" id="${tag.id}-tag" data-tags="tags">
                        <label title="${tag.description}" class="tags-box" for="${tag.id}-tag">
                            ${tag.name}
                        </label>
                      `;
              }, '')}
          </div>
        <div class="form_create_div">
            <button id="buttonCreate" type="submit">create</button> 
        </div>
        </form>`
//        this.host.insertAdjacentHTML('beforeend', html)
        const collect = document.querySelector('.collect')
        collect.insertAdjacentHTML('beforeend', html)
        let form = document.getElementById('create')
        form.addEventListener('change', ev => {
            this.handleClick(ev);
        });
        form.addEventListener('submit', ev => {
            this.handleSubmit(ev);
        });
        let btnCreate = document.getElementById('buttonCancel');
        btnCreate.addEventListener('click', () => {
            const errorSection = document.getElementById('errorMsg');
            const errorContainer = document.getElementById('errorMsgContainer');
            errorSection.setAttribute("style", "display:none");
            errorContainer.innerHTML = ''
        });
    }
    
    handleSubmit(ev) {
        ev.preventDefault();
        const { size, checkIngrId, checkedIngredient, tags } = this.state.createPizza;
        const canvas = document.querySelector('canvas');
        const name = document.querySelector('.create-pizza-name');
        
        const fd = new FormData();
		fd.append('name', name.value);
		fd.append('size', size);
		fd.append('ingredients', JSON.stringify(checkIngrId));
		fd.append('tags', JSON.stringify(tags));

		canvas.toBlob(blob => {
			fd.append('image', blob, 'pizza-image.png');
			return AUTH_HTTP.post("https://pizza-tele.ga/api/v1/pizza/create", fd).then(
                result => {
                    if(result.success === false) {
                        const errorSection = document.getElementById('errorMsg');
                        const errorContainer = document.getElementById('errorMsgContainer');
                        errorSection.setAttribute("style", "display:block");
                        const arr = result.validations;
                        arr.forEach(item=>{
                            let p = document.createElement("p");
                            p.textContent = item;
                            errorContainer.appendChild(p);
                        })
                        console.log("failed", result)
                    } else {
                        window.location.href = "/";
                        console.log("success", result)
                    }
                }
            );
		});
        return false;
        

    }
    
    handleClick(ev) {
        if (ev.target.dataset.ingredient === 'ingredient') {
			const ingredientsInputs = document.querySelectorAll('[data-ingredient]');
			const checkIngr = [];
			const checkIngrId = [];
			ingredientsInputs.forEach(ingredientInput => {
				if (ingredientInput.checked) {
					checkIngr.push(ingredientInput.value);
					checkIngrId.push(parseInt(ingredientInput.id));
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
        if (ev.target.dataset.tags === 'tags') {
            const tags = document.querySelectorAll('[data-tags]');
			const checktags = [];
			tags.forEach(tag => {
				if (tag.checked) {
					checktags.push(parseInt(tag.id));
				}
			});
			this.state.createPizza.tags = checktags;
        }
        
        const { size, checkIngrId, checkedIngredient, tags } = this.state.createPizza;
//        console.log("checkedIngredient", checkedIngredient);
//        console.log("checkIngrId", checkIngrId);
//        console.log("tags", tags);
        

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
                    <section id='errorMsg'>
                        <button id="buttonCancel" type="button">X</button>
                        <div id="errorMsgContainer"></div>
                    </section>
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