export default class RandomCar{
    //xe ngẫu nhiên'
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image;
        this.car.src = "img/car 1.png";
        this._positionY = (Math.random() * 480) * -1;
        this.lane = Math.floor(Math.random() * 4);
        this.lanePosX = [100,175,250,325,400];
        this.carWidth = 70;
        this.carLength = 110;
    }

    get width(){
        return this.carWidth;
    }

    get length(){
        return this.carLength;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){
        this._positionY += 7;
        this.context.drawImage(this.car,
            this.lanePosX[this.lane],
            this._positionY,
            this.width,
            this.length
        );
    }
}