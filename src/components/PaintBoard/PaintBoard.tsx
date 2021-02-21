import React, { Component } from 'react';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import './PaintBoard.scss';

interface IPaintBoardState {
  numberResponse?: number;
}

export default class PaintBoard extends Component<{}, IPaintBoardState> {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private paint: boolean;

  constructor(props: any) {
    super(props);
    this.state = {
      numberResponse: null,
    };
  }

  private canvasMousedown = (ev: React.MouseEvent) => {
    if (!this.canvas) {
      this.canvas = ev.target as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 30;
      this.ctx.strokeStyle = '#FFFFFF';
    }

    this.paint = true;
    const coordinate = this.canvas.getBoundingClientRect();
    const resultX = ev.clientX - coordinate.left;
    const resultY = ev.clientY - coordinate.top;
    this.ctx.moveTo(resultX, resultY);
    this.ctx.lineTo(resultX, resultY);
    this.ctx.stroke();
  }

  private canvasMousemove = (ev: React.MouseEvent) => {
    if (this.paint) {
      const coordinate = this.canvas.getBoundingClientRect();
      const resultX = ev.clientX - coordinate.left;
      const resultY = ev.clientY - coordinate.top;

      this.ctx.lineTo(resultX, resultY);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.moveTo(resultX, resultY);
    }
  }

  private canvasMouseup = () => {
    this.endDriving();
  }

  private canvasMouseout = () => {
    if (this.ctx) {
      this.endDriving();
    }
  }

  private endDriving = () => {
    this.paint = false;
    this.ctx.closePath();
  }

  private sendCanvas = async (ev: React.MouseEvent) => {
    if (this.canvas) {
      const button = ev.target as HTMLButtonElement;
      button.disabled = true;
      const blob = await new Promise<Blob>((resolve) => this.canvas.toBlob(resolve, 'image/jpeg'));
      const formData = new FormData();
      formData.append('file', blob);

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

  private clearCanvas = () => {
    if (this.ctx) this.ctx.clearRect(0, 0, 400, 400);
  }

  render() {
    return (
      <div className="paint-board">
        <canvas
          className="paint-board__canvas"
          width="400"
          height="400"
          onMouseDown={this.canvasMousedown}
          onMouseMove={this.canvasMousemove}
          onMouseOut={this.canvasMouseout}
          onMouseUp={this.canvasMouseup}
          onBlur={() => { }}
        />
        <Button
          name="Очистить"
          handler={this.clearCanvas}
        />
        <Button
          name="Отправить"
          handler={this.sendCanvas}
        />
        <TextField
          name="Результат:"
          value={`${this.state.numberResponse ? this.state.numberResponse : ''}`}
          readonly
        />
      </div>
    );
  }
}
