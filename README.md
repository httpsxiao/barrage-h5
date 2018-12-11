# barrage-h5

基于 canvas 的弹幕 js方法。 并且结合 html 和 node 实战例子，实战内容见 [example](https://github.com/httpsxiao/barrage-h5/tree/master/example)(html) 和 [server](https://github.com/httpsxiao/barrage-h5/tree/master/server)(node)。

### Usage

```javascript
  const barrageH5 = import('barrage-h5')

  barrageH5(video, canvas, options) // video: video DOM， canvas: canvas DOM
```

### options

|参数名称|类型|含义|是否必填|默认值|
|:-----:|:-----:|:-----:|:-----:|:-----:|
| data | Array | 已有弹窗数据 | 否 | [] |
| defaultStyle | Object | 弹窗的配置 | 否 | default |

```javascript
default = {
  value: ''
  time: context.video.currentTime,
  color: 'red',
  speed: 1,
  fontSize: 20
}
```

### example

1. 启动 redis

安装 `redis` ，然后执行 `redis-server`

2. 开启服务

`npm run app`

3. 启动页面

在 `example` 文件夹下放入 `video.mp4` 文件，然后执行 `npm run dev`

4. 浏览器打开[http://localhost:8080/](http://localhost:8080/)，测试弹幕如下图

<img src="./example/example.png" width="400px"/>

代码见 [example](https://github.com/httpsxiao/barrage-h5/tree/master/example) 和 [server](https://github.com/httpsxiao/barrage-h5/tree/master/server) 文件夹
