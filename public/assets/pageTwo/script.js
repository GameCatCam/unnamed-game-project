/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas2')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5

const bgImage1 = new Image()
bgImage1.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-1.png'
const bgImage2 = new Image()
bgImage2.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-2.png'
const bgImage3 = new Image()
bgImage3.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-3.png'
const bgImage4 = new Image()
bgImage4.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-4.png'
const bgImage5 = new Image()
bgImage5.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-5.png'

x = 0
x2 = 2400

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(bgImage5, x, 0)
    ctx.drawImage(bgImage5, x2, 0)
    if (x < -2400) x = 2400 - gameSpeed
    else x -= gameSpeed
    if (x2 < -2400) x2 = 2400 - gameSpeed
    else x2 -= gameSpeed
    requestAnimationFrame(animate)
}
animate()