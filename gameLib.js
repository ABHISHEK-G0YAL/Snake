function init() {
    fps = 8
    lastFrameTime = 0
    timeFrameRate = 1000 / fps
    setup()
    requestAnimationFrame(gameloop)
}
function gameloop(currTimeStamp) {
    if(currTimeStamp - lastFrameTime > timeFrameRate) {
        lastFrameTime = currTimeStamp;
        update()
        getFrame()
    }
    requestAnimationFrame(gameloop)
}
init()