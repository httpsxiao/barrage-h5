const WebSocket = require('ws')
const redis = require('redis')
const redisClient = redis.createClient()
const ws = new WebSocket.Server({ port: 9999 })

let clients = []

ws.on('connection', socket => {
  clients.push(socket)

  redisClient.lrange('barrrages', 0, -1, (err, data) => {
    data = data.map(item => JSON.parse(data))

    socket.send(JSON.stringify({
      type: 'init',
      data
    }))
  })

  socket.on('message', data => {
    redisClient.rpush('barrages', data)

    clients.forEach(client => {
      client.send(JSON.stringify({
        type: 'add',
        data: JSON.parse(data)
      }))
    })
  })

  socket.on('close', () => {
    clients = clients.filter(client => client !== socket)
  })
})
