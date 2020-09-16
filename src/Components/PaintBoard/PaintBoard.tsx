import React, { Component } from 'react'
import './PaintBoard.scss';

export default class PaintBoard extends Component {
  render() {
    return (
      <div>
        <canvas
          className='paint-board__canvas'
          width='600'
          height='600'
          onMouseDown={this.canvas_mousedown.bind(this)}
          onMouseMove={this.canvas_mousemove.bind(this)}
          // onMouseOut={this.canvas_mouseout.bind(this)}
          onMouseUp={this.canvas_mouseup.bind(this)}
        >
        </canvas>
        <button
          onClick={this.sendCanvas.bind(this)}
        >Отправить</button>
        <div>{this.numberResponse ? this.numberResponse : ""}</div>
      </div>
    )
  }

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private paint: boolean;
  private numberResponse: number;

  private canvas_mousedown(ev: React.MouseEvent) {
    this.canvas = ev.target as HTMLCanvasElement;
    this.paint = true;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.beginPath();
    const coordinate = this.canvas.getBoundingClientRect();
    const resultX = ev.clientX - coordinate.left - 2;
    const resultY = ev.clientY - coordinate.top - 2;
    this.ctx.moveTo(resultX, resultY);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'red';
  }

  private canvas_mousemove(ev: React.MouseEvent) {
    if (this.paint) {
      const coordinate = this.canvas.getBoundingClientRect();
      const resultX = ev.clientX - coordinate.left - 2;
      const resultY = ev.clientY - coordinate.top - 2;
      this.ctx.lineTo(resultX, resultY);
      this.ctx.stroke();
    };
  }

  private canvas_mouseup() {
    this.paint = false;
    this.ctx.closePath();
  }

  private async sendCanvas(ev: React.MouseEvent) {
    if (this.canvas) {
      const button = ev.target as HTMLButtonElement;
      button.disabled = true;
      // this.convertCanvasToImage(this.sendImage.bind(this));
      const blob = await new Promise(resolve => this.canvas.toBlob(resolve, 'image/png'));
      const response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob as BodyInit
      })
        .finally(() => {
          button.disabled = false;
        });

      this.numberResponse = await response.json();
    }
  }

}
