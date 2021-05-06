Stream = require('node-rtsp-stream')
const ffmpeg = require("ffmpeg")
try{
stream = new Stream({
  name: 'name',
  streamUrl: 'http://freja.hiof.no:1935/rtplive/_definst_/hessdalen03.stream',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})} catch(e){
    console.log(e)
}