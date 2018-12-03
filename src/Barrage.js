export default class Barrage {
  constructor (conf, context) {
    const defaultConf = Object.assign(
      {},
      {
        value: '',
        time: context.video.currentTime,
        color: 'red',
        speed: 1,
        fontSize: 20
      },
      context.options.defaultStyle
    )

    this.context = context
    this.value = conf.value || defaultConf.value
    this.time = conf.time || defaultConf.time
    this.color = conf.color || defaultConf.color
    this.speed = conf.speed || defaultConf.speed
    this.fontSize = conf.fontSize || defaultConf.fontSize
  }
  init () {
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
  draw () {
    this.x -= this.speed
    this.context.ctx.font = this.fontSize + 'px Arial'
    this.context.ctx.fillStyle = this.color
    this.context.ctx.fillText(this.value, this.x, this.y)
  }
}
