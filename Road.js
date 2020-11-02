export default class Road {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.yOffset = -371;
        this.road = new Image;
        this.road.src = 'img/road1.jpg';
    }

    update() {
        if (this.yOffset >= 0) this.yOffset = -371;
        this.context.drawImage(this.road, 0, this.yOffset);
        this.context.drawImage(this.road, 0, this.yOffset + 371);
        this.context.drawImage(this.road, 0, this.yOffset + 742);
        this.yOffset += 10;
    }
}