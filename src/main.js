import BarrageCanvas from './BarrageCanvas'

const video = document.getElementById('video')
const canvas = document.getElementById('canvas')

let data = [
  {
    value: 'test 789999',
    time: 5,
    color: 'red',
    speed: 1,
    fontSize: 22
  },
  {
    value: 'test 4566666 ',
    time: 10,
    color: '#00a1f5',
    speed: 1,
    fontSize: 30
  },
  {
    value: 'test 1233333',
    time: 0,
    fontSize: 100
  }
]

let bc = new BarrageCanvas(video, canvas, data)

bc.render()
