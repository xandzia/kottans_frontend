import { Sprite } from './sprite';

class PizzaDrawService {
    constructor() {
        this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png'
    }
    init(initData) {
        this.host = initData.host
        this.canvas = document.createElement('canvas')
        this.canvas.id = "canvas"
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
            }
        )
    }
//    _draw() {
//        this.spritesPool.forEach(sprite => {
//            sprite.draw(this.ctx)
//        })
//    }

    _drawCorn() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        let pizza = new Sprite(
            this.images["pizza"], 
            160, 
            160, 
            300 * `${parseInt(this.size)}` / 60, 
            300 * `${parseInt(this.size)}` / 60
        )
        pizza.draw(this.ctx)
        this.sprites["pizza"] = pizza;
        this.spritesPool.push(pizza)
    }

    checkedIngredient(arr, size) {
        this.size = size;
        this._drawCorn()
        if (arr) {
            if(this.size === '30') {
                arr.forEach(item => {
                    this._createSpriteByName(item, 130, 190, 4)
                })
            }
            if(this.size === '45') {
                arr.forEach(item => {
                    this._createSpriteByName(item, 105, 210, 7)
                })
            }
            if(this.size === '60') {
                arr.forEach(item => {
                    this._createSpriteByName(item, 80, 240, 10)
                })
            }
        }
    }

    _createSpriteByName(name, start, end, count) {
//                let mapArray1 = [
//                    ['pineapple','pineapple','pineapple','pineapple','pineapple','pineapple'],
//                    [,,'eggplant','pineapple',,'cucumber',,'cucumber'],
//                    [,,,'pineapple',,'cucumber',],
//                    [,,'cucumber',,'pineapple',,'eggplant'],
//                    [,,'eggplant',,,'cucumber',,'pineapple'],
//                    [,,'pineapple',,'cucumber',,'eggplant',,],
//                    [,,'cucumber',,,'pineapple','eggplant'],
//                    [,,,,'pineapple','cucumber',]
//                ]
//                let posX=90
//                let posY=40
//                for(var i=0; i<mapArray1.length; i++) {
//                    for(var j=0; j<mapArray1[i].length; j++) {
//                        if(mapArray1[i][j]===name) {
//                            this.ctx.drawImage(this.images[name], posX, posY, 32, 32)
//                        }
//                        posX+=32
//                    }
//                    posX=0
//                    posY+=32
//                }
        const arr = []
        for (let i = 0; i < count; i++) {
            arr.push({
                'x': random(start, end),
                'y': random(start, end)
            })
        }
        arr.forEach(item => {
            let sprite = new Sprite(this.images[name], item.x, item.y)
            this.spritesPool.push(sprite)
            sprite.rotateAndPaintImage(this.ctx, this.images[name], random(0, 2*Math.PI), item.x, item.y, 30, 30)
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
            image.crossOrigin = 'anonymous';
            image.src = "https://thingproxy.freeboard.io/fetch/"+url;
            image.width = 20;
            image.height = 20;
            image.onload = () => resolve({name,image});
            image.onerror = (e) => reject(e);
        })
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const PIZZA_DRAW = new PizzaDrawService();
