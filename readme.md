# Project for Intelense Caliber Connect.

This is a project made for learning purpose and is not to be meant for deplyoing and business use. Make sure to not rely on it for your business meeting and official Presentation.

This is a RTSP module and can be used to view RTSP links live in your browser. This project generates links in 5 ports.
- port 5000 : accessing website
- port 9999 : ws link1
- port 9998 : ws link2
- port 9997 : ws link3
- port 9996 : ws link4
sounds confusing? It is not. Follow instruction and launch localhost 5000 thats it.

This app is made from following technologies.
```
NODE Js
express
ffmpeg
node-stream-manager
ReactJs
Bootstrap
HTML
CSS
```

You can find docker image at `-ayushpayasi/intelense`

### To create an enviorenment setup.

    - 1 pull the code from github.
    - 2 install ffmpeg - (get install instructions below.)
    - 3 run npm install
    - 4 run npm start


## install instructions.

### 1) To create a run enviornment 
#### a) either use the docker image ayushpayasi/intelense-
```
docker pull ayushpayasi/intelense
or 
docker run -p 5000:5000 -p 9999:9999 -p 9998:9998 -p 9997:9997 -p 9996:9996 ayushpayasi/intelense
```
#### b) or follow below instructions.
##### if using linux system.
    - 1) open terminal
    - 2) run sudo apt update
    - 3) run sudo install ffmpeg
    - 4) run sudo install node npm
##### if using windows system.
    - 1) download ffmpeg from [ffmpeg](https://www.ffmpeg.org/download.html)
    - 2) follow instructions and setup ffmpeg as enviornment variable.
    - 3) install nodejs and npm

### 2) pull the code from this repository.
### 3) open terminal in same directory and run npm install to install all the dependencies.
### 4) run npm start to start the project.
#### By-
## Ayush Payasi
### follow at 
- instagram/errorsimplified
- instagram/ayushpayasi
- github/ayushpayasi
- linkedin/ayushpayasi

