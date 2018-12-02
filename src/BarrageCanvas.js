import Barrage from './Barrage'

export default class BarrageCanvas {
  constructor (video, canvas, data, options = {}) {
    this.video = video
    this.canvas = canvas
    this.data = data
    this.options = options
    
    this.canvas.width = video.width
    this.canvas.height = video.height
    this.ctx = canvas.getContext('2d')

    this.barrages = this.data.map(d => new Barrage(d, this))
    this.render()
  }
  render () {
    this.clear()
    this.renderBarrage()

    requestAnimationFrame(this.render.bind(this))
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  renderBarrage () {
    let time = this.video.currentTime

    this.barrages.forEach(barrage => {
      if (!barrage.flag && time > barrage.time) {
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }

        barrage.x -= barrage.speed
        barrage.render()

        if (barrage.x < -barrage.width) {
          barrage.flag = true
        }
      }
    })
  }
}
