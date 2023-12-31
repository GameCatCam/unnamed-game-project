/**  @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerChar = new Image();
playerChar.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523

let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value
})

let frameX = 0;
let frameY = 0;
let gameFrame = 0
const staggerFrames = 4

const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'hit',
        frames: 4
    },
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimations[state.name] = frames
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(
        playerChar, // Initial image
        frameX, // starting x for crop
        frameY, // starting y for crop
        spriteWidth, // crop width
        spriteHeight, // crop height
        0, // stretch x
        0, // stretch y
        spriteWidth, // stretch width
        spriteHeight // stretch height
    );

    gameFrame++;
    requestAnimationFrame(animate)
}
animate()