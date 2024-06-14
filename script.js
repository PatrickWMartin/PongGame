//canvas init 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const height = canvas.height;
const width = canvas.width;

//create ball
const ball = {
    size: 5,
    xPos: 50,
    yPos: 50,
    xSpeed: 2,
    ySpeed: 2,
    updatePos: function (){
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
};

const draw = function (ball){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.arc(ball.xPos, ball.yPos, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

const gameLoop = function(){
    draw(ball);
    ball.updatePos();
    setTimeout(gameLoop, 100);
}

gameLoop();


