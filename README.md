# barrage-h5

基于 canvas 的弹幕 js方法。 并且结合 html 和 node 实战例子，实战内容见 [example](https://github.com/httpsxiao/barrage-h5/example)(html) 和 [server](https://github.com/httpsxiao/barrage-h5/server)(node)。

### Usage

```javascript
  const barrageH5 = import('barrage-h5')

  barrageH5(video, canvas, options)
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

详细例子见 [example](https://github.com/httpsxiao/barrage-h5/example) 和 [server](https://github.com/httpsxiao/barrage-h5/server) 文件夹

example 是页面内容， server 是服务器内容
