class Food {
    constructor() {
        this.x = Math.floor(Math.random() * 15)
        this.y = Math.floor(Math.random() * 15)
        this.color = 'purple'
        this.eaten = false
        this.draw = function () {
            pen.fillStyle = this.color
            pen.fillRect(this.x * cs + s, this.y * cs + s, cs - s - 2, cs - s - 2)
        }
        this.update = function () {
            if (this.eaten) {
                this.x = Math.floor(Math.random() * 15)
                this.y = Math.floor(Math.random() * 15)
                this.eaten = false
            }
        }
    }
}