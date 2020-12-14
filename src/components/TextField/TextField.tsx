import React, { Component } from 'react';
import './TextField.scss';



type inputType = 'password'|'text';

interface TextFieldProps {
  name?: string;
  value?: string;
  readonly?: boolean;
  nameField?: string;
  type?: inputType;
}

export default class TextField extends Component<TextFieldProps> {
  render() {
    return (
      <label className='text-field'>
          {this.props.name}
          <input
            name={this.props.nameField}
            className='text-field__field'
            readOnly={this.props.readonly}
            value={this.props.value}
            type={this.props.type? `${this.props.type}`:'text'}>
          </input>
        </label>
    )
  }
}
