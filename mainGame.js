function keyPressed(e) {
    if(e.key == 'ArrowRight' && snake.dir.x != -1) {
        snake.dir = {x:1, y:0}
    }
    else if(e.key == 'ArrowLeft' && snake.dir.x != 1) {
        snake.dir = {x:-1, y:0}
    }
    else if(e.key == 'ArrowDown' && snake.dir.y != -1) {
        snake.dir = {x:0, y:1}
    }
    else if(e.key == 'ArrowUp' && snake.dir.y != 1) {
        snake.dir = {x:0, y:-1}
    }
}
function drawGrid() {
    pen.clearRect(0, 0, W, H)
    for (var x = 1; x <= W; x += cs) {
        pen.moveTo(x, 0)
        pen.lineTo(x, H)
    }
    for (var x = 1; x <= H; x += cs) {
        pen.moveTo(0, x)
        pen.lineTo(W, x)
    }
    pen.strokeStyle = "black"
    pen.stroke()
}
function setup() {
    var canvas = /** @type {HTMLCanvasElement} */ document.getElementById('mycanvas')
    W = H = canvas.height = canvas.width = 782
    pen = canvas.getContext('2d')
    cs = cell_size = 52
    s = sep = 4
    food = new Food()
    snake = new Snake()
    document.addEventListener('keydown', keyPressed)
}
function update() {
    snake.update()
    food.update()
}
function getFrame() {
    drawGrid()
    food.draw()
    snake.draw()
}