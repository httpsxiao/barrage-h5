import Barrage from './Barrage'

export default class BarrageH5 {
  constructor (video, canvas, options = {}) {
    this.video = video
    this.canvas = canvas
    this.options = options

    if (!video || !canvas) { return }
    
    this.canvas.width = video.width || video.clientWidth
    this.canvas.height = video.height || video.clientHeight
    this.ctx = canvas.getContext('2d')

    this.barrages = options.data.map(conf => new Barrage(conf, this)) || []
    this.start()
  }
  add (conf = {}) {
    this.barrages.push(new Barrage(conf, this))
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  start () {
    this.clear()
    this.drawBarrages()

    requestAnimationFrame(this.start.bind(this))
  }
  drawBarrages () {
    let time = this.video.currentTime

    this.barrages.forEach(barrage => {
      if (!barrage.flag && time > barrage.time) {
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }

        barrage.draw()

        if (barrage.x < -barrage.width) {
          barrage.flag = true
        }
      }
    })
  }
}
