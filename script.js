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

const draw = function (){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ball.xPos, ball.yPos, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

const gameLoop = function(){
    draw();
    ball.updatePos();
    ball.checkForCollisions();
    setTimeout(gameLoop, 30);
}

gameLoop();


