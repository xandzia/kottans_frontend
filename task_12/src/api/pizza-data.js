import { AUTH_HTTP } from './http.service.js';

class PizzaDataSevise {
    constructor() {
       this.ingredients = []; 
       this.tags = [];
       this.pizzas =[];
        
    }
    getUnacceotedPizzas(reset, limit, offset) {
        return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/pizza/list?limit=${limit || 100}&offset=${offset || 0}')
        .then(data => {
            if(reset){
                this.pizzas = data.results
            } else {
                this.pizzas = this.pizzas.concat(data.results)
            }
            return data
        })
    }
    getIngredients() {
       return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/ingredient/list')
        .then(
            data => {
                this.ingredients = data.results
                return data.results
            }
        )
    }
    getTags() {
       return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/tag/list')
        .then(
            data => {
                this.tags = data.results
                return data.results
            }
        )
    }
}
export const PIZZA_DATA = new PizzaDataSevise;  
