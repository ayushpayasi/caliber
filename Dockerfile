FROM ubuntu

RUN apt update
RUN apt install -y ffmpeg
RUN apt install -y nodejs
RUN apt install -y npm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
EXPOSE 9999
EXPOSE 9998
EXPOSE 9997
EXPOSE 9996

CMD ["npm","start"]
