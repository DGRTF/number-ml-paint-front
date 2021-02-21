import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import TextField from '../TextField/TextField';
import './RegistrationForm.scss';

import { stateType } from '../../store/store';

import {
  showHiddenRegistrationForm,
  showHiddenRegistrationFormType,
  registration,
  registrationType,
} from '../../store/actions/RegistrationForm/RegistrationForm';

import { authorize } from '../../api/authorize';

interface ImapDispatchToProps {
  showHiddenRegistrationForm?: showHiddenRegistrationFormType;
  registration?: registrationType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface IRegistrationFormProps extends ImapDispatchToProps, ImapStateToProps { }

class RegistrationForm extends Component<IRegistrationFormProps> {
  registrationUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const pass = formData.get('password');
    const againPass = formData.get('again-password');

    if (pass === againPass) {
      formData.delete('again-password');
      this.props.registration(formData, authorize);
    } else {
      alert('Пароли не совпадают');
    }
  }

  private hiddenForm = () => {
    this.props.showHiddenRegistrationForm({
      visible: false,
    });
  };

  render() {
    return (
      <div
        className={`registration-form ${this.props.visible ? '' : 'registration-form_hidden'}`}
      >
        <Form
          closeHandler={this.hiddenForm}
          submitFormHandler={this.registrationUser}
          name="Регистрация"
          submitButtonName="Зарегистрироваться"
        >
          <TextField
            nameField="email"
            name="Email"
          />
          <TextField
            nameField="name"
            name="Name"
          />
          <TextField
            nameField="password"
            name="Password"
          />
          <TextField
            nameField="again-password"
            name="Again Password"
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  visible: state.registrationFormReducer.visible,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenRegistrationForm,
    registration,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IRegistrationFormProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationForm);
