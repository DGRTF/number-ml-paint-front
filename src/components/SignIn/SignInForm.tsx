import React, { Component } from 'react';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import './SignInForm.scss';

interface ImapDispatchToProps {
  showHiddenSignInForm: showHiddenSignInFormType;
  signIn: signInType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface ISignInFormProps extends ImapStateToProps, ImapDispatchToProps { }

class SignInForm extends Component<ISignInFormProps> {
  render() {
    return (
      <div
        className={`sign-in ${this.props.visible ? '' : 'sign-in-hidden'}`}>
        <Form
          closeHandler={this.hiddenForm.bind(this)}
          submitFormHandler={this.signIn.bind(this)}
          name='Вход'
          submitButtonName='Войти'>
          <TextField
            nameField='name'
            name='Password' />
          <TextField
            nameField='password'
            name='Password' />
        </Form>
      </div>
    )
  }

  hiddenForm() {
    this.props.showHiddenSignInForm({
      visible: false
    });
  }

  signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    this.props.signIn(formData);
  }
}

import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showHiddenSignInForm,
  showHiddenSignInFormType,
  signIn,
  signInType,
} from "../../store/actions/SignInForm/SignInForm";

import { bindActionCreators } from 'redux';
import Form from '../Form/Form';



const mapStateToProps = (state: stateType) => {
  return {
    visible: state.signInForm.visible,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenSignInForm,
    signIn,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, ISignInFormProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);