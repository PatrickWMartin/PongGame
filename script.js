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
    xSpeed: 3,
    ySpeed: 2,
    updatePos: function (){
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    },
    checkForCollisions: function (){
        if (this.xPos < 0 + ball.size || this.xPos > width - ball.size){
            this.xSpeed = -this.xSpeed;
        }

        if (this.yPos < 0 + ball.size || this.yPos > height - ball.size){
            this.ySpeed = -this.ySpeed;
        }

    },
};

const leftPaddle = {
    height: 50,
    width: 10,
    xPos: 20,
    yPos: 150,
    speed: 5,
};
const rightPaddle = {
    height: 50,
    width: 10,
    xPos: width - 20,
    yPos: 150,
    speed: 5,
};

document.addEventListener('mousemove', e => {
    if (e.y + rightPaddle.height < 300 && e.y > 0)
        rightPaddle.yPos = e.y 
});
const draw = function (){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ball.xPos, ball.yPos, ball.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillRect(leftPaddle.xPos, leftPaddle.yPos, leftPaddle.width,leftPaddle.height);
    ctx.fillRect(rightPaddle.xPos, rightPaddle.yPos, rightPaddle.width,rightPaddle.height);
}

const gameLoop = function(){
    draw();
    ball.updatePos();
    ball.checkForCollisions();
    setTimeout(gameLoop, 30);
}

gameLoop();


