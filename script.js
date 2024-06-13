//canvas init 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const height = canvas.height;
const width = canvas.width;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

//ball logic
ctx.fillStyle = "white";
ctx.arc(50, 50, 5, 0, 2 * Math.PI);
ctx.fill();


