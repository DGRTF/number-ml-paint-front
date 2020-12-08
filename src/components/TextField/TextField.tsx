import React, { Component } from 'react';
import './TextField.scss';

interface TextFieldProps {
  name?: string;
  value?: string;
  readonly?: boolean;
  nameField?: string;
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
            value={this.props.value}>
          </input>
        </label>
    )
  }
}
