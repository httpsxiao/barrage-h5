import BarrageH5 from '../lib/main' // 改成 import BarrageH5 from 'barrage-h5'

const $video = document.getElementById('video')
const $canvas = document.getElementById('canvas')
const $text = document.getElementById('text')
const $color = document.getElementById('color')
const $range = document.getElementById('range')
const $btn = document.getElementById('btn')

$video.src = require('./video.mp4')

let ws = new WebSocket('ws://localhost:9999')
let bh5

ws.onopen = () => {
  ws.onmessage = e => {
    let res = JSON.parse(e.data)

    if (res.type === 'init') {
      bh5 = new BarrageH5($video, $canvas, {
        data: res.data,
        defaultStyle: {
          color: 'blue',
          speed: 2,
          fontSize: 24
        }
      })
    } else if (res.type === 'add') {
      bh5.add(res.data)
    }
  }
}

function send () {
  let value = $text.value
  let color = $color.value
  let fontSize = $range.value
  
  ws.send(
    JSON.stringify({
      value,
      color,
      fontSize
    })
  )

  $text.value = ''
}

$video.addEventListener('play', () => { bh5.start() }, false)
$btn.addEventListener('click', send, false)
