
export default class CarController{
//Bộ điều khiển oto
    constructor(options){
        this.road = options.road;
        this.myCar = options.myCar;
        this.init();
    }

    init(){
        //trong đó
        document.addEventListener("keydown", (e)=>{
            switch(e.keyCode){
                case 37: // mũi tên trái
                    this.myCar.moveLeft();
                    break;
                case 39: // mũi tên phải
                    this.myCar.moveRight();
                    break;
                default:
                    break;
            }
        });
    }


}