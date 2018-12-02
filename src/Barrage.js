export default class Barrage {
  constructor (data, context) {
    this.value = data.value
    this.time = data.time
    this.obj = data
    this.context = context
    this.default = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20
    }
  }
  init () {
    this.color = this.obj.color || this.default.color
    this.speed = this.obj.speed || this.default.speed
    this.opacity = this.obj.opacity || this.default.opacity
    this.fontSize = this.obj.fontSize || this.default.fontSize

    let p = document.createElement('p')
    p.style.fontSize = this.fontSize + 'px'
    p.style.position = 'absolute'
    p.innerHTML = this.value
    document.body.appendChild(p)
    this.width = p.clientWidth
    document.body.removeChild(p)

    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()

    if (this.y < this.fontSize) {
      this.y = this.fontSize
    }
    if (this.y > this.context.canvas.height - this.fontSize) {
      this.y = this.context.canvas.height - this.fontSize
    }
  }
  render () {
    this.context.ctx.font = this.fontSize + 'px Arial'
    this.context.ctx.fillStyle = this.color
    this.context.ctx.fillText(this.value, this.x, this.y)
  }
}
