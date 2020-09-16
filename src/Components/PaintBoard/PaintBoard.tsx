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
  }

  //  componentDidMount(){
  //   this.init()
  //  }
  // constructor(props:any){
  //   super(props)
  //   this.init()
  // }

  //   private dctrl: {
  //     drawing: boolean,
  //     prevx: number,
  //     prevy: number
  //   };
  //   private ctx: CanvasRenderingContext2D;
  //   private canvas: HTMLCanvasElement;
  //   private image: CanvasImageSource;
  //   private canvasPattern: CanvasPattern;
  //   private currentColor: string;

  //   private init() {
  //     this.dctrl = {
  //       drawing: false,
  //       prevx: null,
  //       prevy: null
  //     };

  //     this.canvas = this.refs.canvasPaint as HTMLCanvasElement;

  //     this.ctx = this.canvas.getContext("2d");
  //     this.ctx.lineWidth = 2;
  //     this.ctx.lineCap = "round";

  //     this.canvasPattern = this.ctx.createPattern(this.image, "repeat");

  //     this.currentColor = "#6FC";

  //     let message = "JUST DRAW";

  //     this.ctx.font = "bold 36px sans-serif";
  //     this.ctx.textAlign = "center";

  //     this.ctx.globalCompositeOperation = "source-over";
  //     this.ctx.strokeStyle = this.currentColor;
  //     this.ctx.strokeText(message, 320, 40);

  //     this.ctx.globalCompositeOperation = "destination-out";
  //     this.ctx.strokeStyle = this.canvasPattern;
  //     this.ctx.strokeText(message, 320, 40);
  //   }

  //   private draw_line(x1: number, y1: number, x2: number, y2: number) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(x1, y1);
  //     this.ctx.lineTo(x2, y2);

  //     this.ctx.globalCompositeOperation = "source-over";
  //     this.ctx.strokeStyle = this.currentColor;
  //     this.ctx.stroke();

  //     this.ctx.globalCompositeOperation = "destination-out";
  //     this.ctx.strokeStyle = this.canvasPattern;
  //     this.ctx.stroke();
  //   }

  //   private draw_line_ev(ev) {
  //     var rect = ev.target.getBoundingClientRect();
  //     var mousex = ev.clientX - rect.left;
  //     var mousey = ev.clientY - rect.top;
  //     this.draw_line(this.dctrl.prevx, this.dctrl.prevy, mousex, mousey);
  //     this.dctrl.prevx = mousex;
  //     this.dctrl.prevy = mousey;
  //   }

  //   private canvas_mousedown(ev: React.MouseEvent) {
  //     let rect = (ev.target as HTMLElement).getBoundingClientRect();

  //     this.dctrl.drawing = true;

  //     this.draw_line(null, null, null, null);

  //     this.dctrl.prevx = ev.clientX - rect.left;
  //     this.dctrl.prevy = ev.clientY - rect.top;
  //   }

  //   private canvas_mousemove(ev: React.MouseEvent) {
  //     if (this.dctrl.drawing) {
  //       this.draw_line_ev(ev);
  //     }
  //   }

  //   private canvas_mouseout(ev: React.MouseEvent) {
  //     if (this.dctrl.drawing) {
  //       this.draw_line_ev(ev);
  //     }
  //     this.dctrl.drawing = false;
  //   }

  //   private canvas_mouseup(ev: React.MouseEvent) {
  //     this.dctrl.drawing = false;
  //   }

  //   // this.image = new Image();
  //   // this.image.onload = this.init;
  //   // this.image.src = 'data:image/png';
}
