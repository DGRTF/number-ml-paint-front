import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

export interface IFormProps {
  closeHandler: () => void;
  submitFormHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  submitButtonName: string;
  children: React.ReactNode;
}

export default function Form(props: IFormProps) {
  return (
    <div className="form">
      <div className="form__header">
        <span>{props.name}</span>
        <Button name="X" handler={props.closeHandler} />
      </div>
      <form
        className="form__form"
        onSubmit={props.submitFormHandler}
      >
        {props.children}
        <Button name={props.submitButtonName} type="submit" />
      </form>
    </div>
  );
}
