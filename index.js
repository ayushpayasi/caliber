const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});



app.listen("5000",()=>{console.log("Running on port 5000")})


Stream = require('node-rtsp-stream')

stream = new Stream({
  name: 'stream1',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-analyzeduration': 2147483647,
     '-probesize': 2147483647,
    '-stats': '',
    '-r': 30 // options with required values specify the value after the key
  }
})

stream2 = new Stream({
  name: 'stream2',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9998,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})


stream3 = new Stream({
  name: 'stream3',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9997,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})

stream4 = new Stream({
  name: 'stream4',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9996,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})

