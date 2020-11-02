import Game from './Game.js'

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");


let game = new Game(context);

requestAnimationFrame(roadLoop);
//yêu cầu khung hìh


function roadLoop() {


    game.update();

    requestAnimationFrame(roadLoop);
}
