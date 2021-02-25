import React from 'react';
import './Button.scss';

export interface ButtonProps {
  name?: string;
  handler?: (ev: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type || 'button'}
      className="button"
      onClick={props.handler}
    >
      {props.name ? props.name : ''}
    </button>
  );
}
