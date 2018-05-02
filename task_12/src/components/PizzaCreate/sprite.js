export class Sprite {
    constructor(image, cx, cy, width, height) {
        this.x = 0;
        this.y = 0;
        this.image = image;
        this.width = width || this.image.width;
        this.height = height || this.image.height;
        this.cx = cx || 0;
        this.cy = cy || 0;
    }
    get cx() {
        return Math.round(this.x + this.width * 0.5);
    }

    get cy() {
        return Math.round(this.y + this.height * 0.5);
    }

    set cx(value) {
        this.x = Math.round(value - this.width * 0.5);
    }

    set cy(value) {
        this.y = Math.round(value - this.height * 0.5);
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    rotateAndPaintImage(ctx, image, angleInRad, positionX, positionY, axisX, axisY) {
        ctx.translate(positionX, positionY);
        ctx.rotate(angleInRad);
        ctx.drawImage(image, -axisX, -axisY);
        ctx.rotate(-angleInRad);
        ctx.translate(-positionX, -positionY);
    }
}
