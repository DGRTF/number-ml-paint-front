import React, { Component } from 'react'
import './PaintBoard.scss';

interface IPaintBoardState {
  numberResponse: number;
}

export default class PaintBoard extends Component<{}, IPaintBoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      numberResponse: null
    }
  }
  render() {
    return (
      <div className='paint-board'>
        <canvas
          className='paint-board__canvas'
          width='400'
          height='400'
          onMouseDown={this.canvas_mousedown.bind(this)}
          onMouseMove={this.canvas_mousemove.bind(this)}
          onMouseOut={this.canvas_mouseout.bind(this)}
          onMouseUp={this.canvas_mouseup.bind(this)}
        >
        </canvas>
        <button
          className='paint-board__send-button'
          onClick={this.sendCanvas.bind(this)}
        >Отправить</button>
        <label className='paint-board__label-response'>
          Результат:
          <input
            className='paint-board__response'
            readOnly
            value={`${this.state.numberResponse ? this.state.numberResponse : ""}`}>
          </input>
        </label>
      </div>
    )
  }

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private paint: boolean;

  private canvas_mousedown(ev: React.MouseEvent) {
    this.canvas = ev.target as HTMLCanvasElement;
    this.paint = true;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.beginPath();
    const coordinate = this.canvas.getBoundingClientRect();
    const resultX = ev.clientX - coordinate.left - 2;
    const resultY = ev.clientY - coordinate.top - 2;
    this.ctx.moveTo(resultX, resultY);
    this.ctx.lineWidth = 25;
    this.ctx.strokeStyle = 'white';
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
    this.endDriving();
  }

  private canvas_mouseout() {
    if (this.ctx) {
      this.endDriving();
    }
  }

  private endDriving() {
    this.paint = false;
    this.ctx.closePath();
  }

  private async sendCanvas(ev: React.MouseEvent) {
    if (this.canvas) {
      const button = ev.target as HTMLButtonElement;
      button.disabled = true;
      const blob = await new Promise<Blob>(resolve => this.canvas.toBlob(resolve, 'image/jpeg'));
      const formData = new FormData();
      formData.append('file', blob);
      const out = {
        file: blob,
      }
      const response = await fetch('/AINumber/DefineNumber', {
        method: 'POST',
        headers: {
          //   'Content-Type': "multipart/form-data",
          // "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData,
      })
        .finally(() => {
          button.disabled = false;
        });

      this.setState({
        numberResponse: await response.json(),
      });
    }
  }

}
