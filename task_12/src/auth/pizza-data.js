import { AUTH_HTTP } from './http.service.js';

class PizzaDataSevise {
    constructor() {
       this.ingredients = []; 
       this.tags = []; 
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
