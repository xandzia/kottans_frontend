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
        this.spritesPool.forEach(sprite => {
            sprite.draw(this.ctx)
        })
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
        //        let mapArray1 = [
        //            [,,'pineapple','cucumber',,],
        //            [,,'eggplant','pineapple',,'cucumber',,'cucumber'],
        //            [,,,'pineapple',,'cucumber',],
        //            [,,'cucumber',,'pineapple',,'eggplant'],
        //            [,,'eggplant',,,'cucumber',,'pineapple'],
        //            [,,'pineapple',,'cucumber',,'eggplant',,],
        //            [,,'cucumber',,,'pineapple','eggplant'],
        //            [,,,,'pineapple','cucumber',]
        //        ]
        //        let posX=90
        //        let posY=40
        //        for(var i=0; i<mapArray1.length; i++) {
        //            for(var j=0; j<mapArray1[i].length; j++) {
        //                if(mapArray1[i][j]===name) {
        //                    this.ctx.drawImage(this.images[name], posX, posY, 32, 32)
        //                }
        //                posX+=32
        //            }
        //            posX=0
        //            posY+=32
        //        }
        const arr = []
        for (let i = 0; i <= 10; i++) {
            arr.push({
                'x': random(80, 240),
                'y': random(80, 240)
            })
        }
        arr.forEach(item => {
            let sprite = new Sprite(this.images[name], item.x, item.y)
            this.spritesPool.push(sprite)
            //            this._draw()
            sprite.rotateAndPaintImage(this.ctx, this.images[name], random(45, 180), item.x, item.y, 30, 30)
        })
        let a = {
            name: name,
            arr: arr
        }
        this.spritesCoords.push(a)
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
