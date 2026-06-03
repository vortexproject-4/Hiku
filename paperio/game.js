const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
    x:200,
    y:200,
    angle:0,
    color:"cyan",
    speed:3
};

const keys = {};

window.addEventListener("keydown",(e)=>{
    keys[e.key]=true;
});

window.addEventListener("keyup",(e)=>{
    keys[e.key]=false;
});

function update(){

    if(keys["ArrowLeft"])
        player.angle -= 0.06;

    if(keys["ArrowRight"])
        player.angle += 0.06;

    player.x += Math.cos(player.angle)*player.speed;
    player.y += Math.sin(player.angle)*player.speed;
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.save();

    ctx.translate(
        canvas.width/2-player.x,
        canvas.height/2-player.y
    );

    ctx.fillStyle = player.color;

    ctx.beginPath();
    ctx.arc(
        player.x,
        player.y,
        10,
        0,
        Math.PI*2
    );
    ctx.fill();

    ctx.restore();
}

function loop(){

    update();
    draw();

    requestAnimationFrame(loop);
}

loop();

function restartGame(){
    location.reload();
}