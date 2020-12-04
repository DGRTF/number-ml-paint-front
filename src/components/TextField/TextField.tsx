import React, { Component } from 'react';
import './TextField.scss';

interface TextFieldProps {
  name?: string;
  value?: string;
}

export default class TextField extends Component<TextFieldProps> {
  render() {
    return (
      <label className='text-field'>
          {this.props.name}
          <input
            className='text-field__field'
            readOnly
            value={this.props.value}>
          </input>
        </label>
    )
  }
}
