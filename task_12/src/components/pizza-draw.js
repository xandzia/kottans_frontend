import {
    Sprite
} from './sprite';

class PizzaDrawService {
    constructor() {
        this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png'
    }
    init(initData) {
        this.host = initData.host
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext("2d")
        this.canvasWidth = 320
        this.canvasHeight = 320
        this.ingredients = initData.ingredients
        this.images = {};
        this.canvas.width = this.canvasWidth
        this.canvas.height = this.canvasHeight
        this.sprites = {};
        this.spritesPool = [];
        this.spritesCoords = [];
        this.size = '60';
        this._loadResources().then(
            (resources) => {
                resources.forEach(resource => this.images[resource.name] = resource.image)
                this.host.append(this.canvas)

                this._drawCorn()
                this.checkedIngredient()
            }
        )
    }
    _draw() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.spritesPool.forEach(sprite => sprite.draw(this.ctx))
    }

    _drawCorn() {
        let pizza = new Sprite(this.images["pizza"], 160, 160, 300, 300)
        pizza.draw(this.ctx)
        this.sprites["pizza"] = pizza;
        this.spritesPool.push(pizza)
    }

    checkedIngredient(arr) {
        if (arr) {
            this._drawCorn()
            arr.forEach(item => {
                this._createSpriteByName(item)
            })
        }
    }

    _createSpriteByName(name) {
        var canvas = document.getElementById("thecanvas");

        var ctx = canvas.getContext('2d'),
            count = 10, // number of random  points
            cx = 150,
            cy = 150,
            radius = 148;


        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);

        ctx.fill();

        // create random points
        ctx.fillStyle = '#999999';

        while (count) {
            var pt_angle = Math.random() * 2 * Math.PI;
            var pt_radius_sq = Math.random() * radius * radius;
            var pt_x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);
            var pt_y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);
            ctx.fillRect(pt_x + canvas.width / 2, pt_y + canvas.width / 2, 22, 22);
            count--;
        }
        //        const arr = []
        //        for (let i = 0; i <= 10; i++) {
        //            arr.push({
        //                'x': random(80, 240),
        //                'y': random(80, 240)
        //            })
        //        }
        //        arr.forEach( item => {
        let sprite = new Sprite(this.images[name], item.x, item.y)
        this.spritesPool.push(sprite)
        this._draw()
        //        })
        //        let a = {
        //            name: name,
        //            arr: arr
        //        }
        //        this.spritesCoords.push(a)
        //        console.log('this.spritesCoords', this.spritesCoords)
    }

    _loadResources() {
        let promises = [];
        promises.push(this._loadImage("pizza", this.crust_pizza))
        promises = promises.concat(this.ingredients.map(ingredient => {
            let ingr_url = `https://pizza-tele.ga/${ingredient.image_url}`
            return this._loadImage(ingredient.name, ingr_url)
        }));
        return Promise.all(promises)
    }

    _loadImage(name, url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve({
                name,
                image
            })
            image.onerror = (e) => reject(e)
            image.src = url
        })
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const PIZZA_DRAW = new PizzaDrawService();
