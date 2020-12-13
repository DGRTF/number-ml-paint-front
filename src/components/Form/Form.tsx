import React, { Component } from "react";
import './Form.scss';
import Button from '../Button/Button';



interface IFormProps {
  closeHandler?: () => void;
  submitFormHandler?: (event: React.FormEvent<HTMLFormElement>) => void;
  name?: string;
  submitButtonName?: string;
}

export default class Form extends Component<IFormProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div
        className='form'>
        <div className='form__header'>
          <span>{this.props.name}</span>
          <Button name='X' handler={this.props.closeHandler.bind(this)} />
        </div>
        <form
          className='form__form'
          onSubmit={this.props.submitFormHandler.bind(this)}>
          {this.props.children}
          <Button
            name={this.props.submitButtonName}
          />
        </form>
      </div>
    )
  }

}


