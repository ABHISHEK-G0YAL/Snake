function init() {
    fps = 6
    lastTime = 0
    frameTime = 1000 / fps
    setup()
    requestAnimationFrame(gameloop)
}
function gameloop(timeStamp) {
    deltaTime = timeStamp - lastTime
    if(deltaTime > frameTime) {
        lastTime = timeStamp
        update()
        getFrame()
    }
    requestAnimationFrame(gameloop)
}
init()