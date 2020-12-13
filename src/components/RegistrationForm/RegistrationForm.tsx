import React, { Component } from 'react';
import Form from '../Form/Form';
import TextField from '../TextField/TextField';
import './RegistrationForm.scss';



interface ImapDispatchToProps {
  showHiddenRegistrationForm?: showHiddenRegistrationFormType;
  registration?: registrationType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface IRegistrationFormProps extends ImapDispatchToProps, ImapStateToProps { }

class RegistrationForm extends Component<IRegistrationFormProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div
        className={`registration-form ${this.props.visible ? '' : 'registration-form_hidden'}`}>
        <Form
          closeHandler={this.hiddenForm.bind(this)}
          submitFormHandler={this.registrationUser.bind(this)}
          name='Регистрация'
          submitButtonName='Зарегистрироваться'>
          <TextField
            nameField='email'
            name='Email' />
          <TextField
            nameField='name'
            name='Name' />
          <TextField
            nameField='password'
            name='Password' />
          <TextField
            nameField='again-password'
            name='Again Password' />
        </Form>
      </div>
    )
  }

  async registrationUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const pass = formData.get('password');
    const againPass = formData.get('again-password');

    if (pass === againPass) {
      formData.delete('again-password');
      this.props.registration(formData);
    }else{
      alert('Пароли не совпадают');
    }
  }

  private hiddenForm() {
    this.props.showHiddenRegistrationForm({
      visible: false,
    });
  }

}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showHiddenRegistrationForm,
  showHiddenRegistrationFormType,
  registration,
  registrationType
} from "../../store/actions/RegistrationForm/RegistrationForm";

import { bindActionCreators } from 'redux';



const mapStateToProps = (state: stateType) => {
  return {
    visible: state.registrationFormReducer.visible,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenRegistrationForm,
    registration,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IRegistrationFormProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
