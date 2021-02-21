import React from 'react';
import './TextField.scss';

type inputType = 'password'|'text';

export interface TextFieldProps {
  name?: string;
  value?: string;
  readonly?: boolean;
  nameField?: string;
  type?: inputType;
  required?: boolean;
}

export default function TextField(props:TextFieldProps) {
  return (
    <label className="text-field">
      {props.name}
      <input
        name={props.nameField}
        className="text-field__field"
        readOnly={props.readonly}
        required={props.required}
        value={props.value}
        type={props.type ? `${props.type}` : 'text'}
      />
    </label>
  );
}
