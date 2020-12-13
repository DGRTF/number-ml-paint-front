import React, { Component } from 'react'
import './VideoStream.scss';

import Button from '../Button/Button'

export default class VideoStream extends Component {
  ctx: CanvasRenderingContext2D;

  video: HTMLVideoElement;

  interval: NodeJS.Timeout;

  stream: MediaStream;

  render() {
    return (
      <div className='video-stream'>
        <video id='video'
          className='video-stream__video'>Video stream not available.</video>
        <canvas id='canvas'
          className='video-stream__canvas'></canvas>
        <Button name='Play'
          handler={this.playVideo.bind(this)} />
        <Button name='Pause'
          handler={this.pauseVideo.bind(this)} />
      </div>
    )
  }

  playVideo() {
    let token = localStorage.getItem('access_token');

    if (token) {
      this.video = document.getElementById('video') as HTMLVideoElement;
      let canvas = document.getElementById('canvas') as HTMLCanvasElement;
      this.ctx = canvas.getContext('2d');

      let socket = new WebSocket(`wss://${location.hostname}/WebSocketDataAI/Connect`);
      socket.onopen = () => {
        let outputData: number[] = [];

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          .then((stream) => {
            this.stream = stream;
            this.video.srcObject = stream;

            this.interval = setInterval(() => {
              this.ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
              let image = this.ctx.getImageData(0, 0, 28, 28);

              outputData.length = 0;
              let count = image.data.length / 4;

              for (let i = 0; i < count; i++) {
                let r = image.data[i * 4];
                let g = image.data[i * 4 + 1];
                let b = image.data[i * 4 + 2];

                let result = Math.round((r + g + b) / 3);

                outputData.push(result);
              }

              socket.send(JSON.stringify(outputData));

              this.ctx.putImageData(image, 0, 400);
            }, 40);

            this.video.play();
          })
          .catch(function (err) {
            console.log("An error occurred: " + err);
          });
      }
    }
  }

  pauseVideo() {
    this.video.pause();
    clearInterval(this.interval);
    this.stream.getTracks().forEach(el =>
      el.stop()
    );
  }
}
