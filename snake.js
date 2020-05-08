class Snake {
    constructor() {
        this.color = 'black'
        this.cells = []
        this.dir = {x:1, y:0}
        for (var i = 2; i >= 0; i--) {
            this.cells.push({ x: i, y: 0 })
        }
        this.draw = function () {
            pen.fillStyle = this.color
            for (let i = 0; i < this.cells.length; i++) {
                pen.fillRect(this.cells[i].x * cs + s, this.cells[i].y * cs + s, cs - s - 2, cs - s - 2)
            }
        }
        this.update = function () {
            if (this.cells[0].x == food.x && this.cells[0].y == food.y) {
                food.eaten = true
            }
            else {
                this.cells.pop()
            }
            this.cells.unshift({x:this.cells[0].x + this.dir.x, y:this.cells[0].y + this.dir.y})
            this.cells[0].x = (this.cells[0].x + 15) % 15
            this.cells[0].y = (this.cells[0].y + 15) % 15
        }
    }
}