import React, { Component } from 'react';
import './Button.scss';

interface ButtonProps {
  name?: string;
  handler?: (ev: React.MouseEvent) => void;
}

export default class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <button
        className='button'
        onClick={this.props.handler?.bind(this)}
      >{this.props.name ? this.props.name : ""}</button>
    )
  }
}
