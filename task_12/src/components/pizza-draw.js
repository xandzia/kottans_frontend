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
        this._loadResources().then(
            (resources) => {
                resources.forEach(resource => this.images[resource.name] = resource.image)
//                this.host.append(this.canvas)
//                let pizza = new Sprite(this.images["pizza"], 160, 160, 300, 300)
//                
//                
//                this.sprites["pizza"] = pizza;
//                this.spritesPool.push(pizza)
//                
//                this._draw()
//                setInterval(() => {
//                    let corn = new Sprite(this.images["cheese"], random(80, 240), random(80, 240))
//                    this.spritesPool.push(corn)
//                    this._draw()
//                }, 2000)
            }
        )
    }

    _draw() {
        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight)
        this.spritesPool.forEach(sprite => sprite.draw(this.ctx))
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
        return new Promise((resolve, reject) =>
            {
                const image = new Image();
                image.onload = () => resolve({name, image})
                image.onerror = (e) => reject(e)
                image.src = url
            }
        )
    }
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export const PIZZA_DRAW = new PizzaDrawService();