/**  @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerChar = new Image();
playerChar.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523

let frameX = 0;
let frameY = 4;
let gameFrame = 0
const staggerFrames = 3
animationFrames = 10;


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(
        playerChar, // Initial image
        frameX * spriteWidth, // starting x for crop
        frameY * spriteHeight, // starting y for crop
        spriteWidth, // crop width
        spriteHeight, // crop height
        0, // stretch x
        0, // stretch y
        CANVAS_WIDTH, // stretch width
        CANVAS_HEIGHT // stretch height
    );
    if (gameFrame % staggerFrames === 0) {
        if (frameX < animationFrames) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate)
}
animate()