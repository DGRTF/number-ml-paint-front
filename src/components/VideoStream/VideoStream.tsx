import React, { Component } from 'react'
import './VideoStream.scss';

import Button from '../Button/Button'

export default class VideoStream extends Component {
  render() {
    return (
      <div className='video-stream'>
        <video id="video"
        className='video-stream__video'>Video stream not available.</video>
        <Button name='Play'
          handler={this.sendStream.bind(this)} />
      </div>
    )
  }

  sendStream(){
    let video = document.getElementById('video') as HTMLMediaElement;

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();

        let recorderOptions = {
          mimeType: 'video/webm; codecs=vp8' // будем кодировать видеопоток в формат webm кодеком vp8
        },
        mediaRecorder = new MediaRecorder(stream, recorderOptions ), // объект MediaRecorder
        socket = new WebSocket(`wss://${location.hostname}stream/video`);

         mediaRecorder.ondataavailable = function(e) {
          if (e.data && e.data.size > 0) {
            try{
            // получаем кусочек видеопотока в e.data
           socket.send(e.data);
            }catch(error){
              alert(e);
              video.pause();
              return;
            }
          }
      }

      mediaRecorder.start(40); 
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });
  }
}
