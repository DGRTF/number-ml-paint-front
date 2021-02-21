import React, { Component } from 'react';
import './VideoStream.scss';

import Button from '../Button/Button';

export default class VideoStream extends Component {
  ctx: CanvasRenderingContext2D;

  video: HTMLVideoElement;

  // eslint-disable-next-line no-undef
  interval: NodeJS.Timeout;

  stream: MediaStream;

  private playVideo = () => {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.video = document.getElementById('video') as HTMLVideoElement;
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      this.ctx = canvas.getContext('2d');

      // eslint-disable-next-line no-restricted-globals
      const socket = new WebSocket(`wss://${location.hostname}:${location.port}/WebSocketDataAI/Connect`);
      socket.onopen = () => {
        const outputData: number[] = [];

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          .then((stream) => {
            this.stream = stream;
            this.video.srcObject = stream;

            this.interval = setInterval(() => {
              this.ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
              const image = this.ctx.getImageData(0, 0, 28, 28);

              outputData.length = 0;
              const count = image.data.length / 4;

              for (let i = 0; i < count; i += 1) {
                const r = image.data[i * 4];
                const g = image.data[i * 4 + 1];
                const b = image.data[i * 4 + 2];

                const result = Math.round((r + g + b) / 3);

                outputData.push(result);
              }

              socket.send(JSON.stringify(outputData));

              this.ctx.putImageData(image, 0, 400);
            }, 40);

            this.video.play();
          })
          .catch((err) => {
            console.log(`An error occurred: ${err}`);
          });
      };
    }
  }

  private pauseVideo = () => {
    this.video.pause();
    clearInterval(this.interval);
    this.stream.getTracks().forEach((el) => el.stop());
  }

  render() {
    return (
      <div className="video-stream">
        <video
          id="video"
          className="video-stream__video"
        >
          <track kind="captions" />
          Video stream not available.
        </video>
        <canvas
          id="canvas"
          className="video-stream__canvas"
        />
        <Button
          name="Play"
          handler={this.playVideo}
        />
        <Button
          name="Pause"
          handler={this.pauseVideo}
        />
      </div>
    );
  }
}
