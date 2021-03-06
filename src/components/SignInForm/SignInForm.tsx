import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateType } from '../../store/store';

import {
  showHiddenSignInForm,
  showHiddenSignInFormType,
  signIn,
  signInType,
} from '../../store/actions/SignInForm/SignInForm';

import Form from '../Form/Form';
import TextField from '../TextField/TextField';
import './SignInForm.scss';

interface ImapDispatchToProps {
  showHiddenSignInForm?: showHiddenSignInFormType;
  signIn?: signInType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface ISignInFormProps extends ImapStateToProps, ImapDispatchToProps { }

class SignInForm extends Component<ISignInFormProps> {
  private hiddenForm = () => {
    this.props.showHiddenSignInForm({
      visible: false,
    });
  }

  private signIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    this.props.signIn(formData);
  }

  render() {
    return (
      <div className={`sign-in ${this.props.visible ? '' : 'sign-in_hidden'}`}>
        <Form
          closeHandler={this.hiddenForm}
          submitFormHandler={this.signIn}
          name="Вход"
          submitButtonName="Войти"
        >
          <TextField
            nameField="name"
            name="Name"
          />
          <TextField
            nameField="password"
            name="Password"
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  visible: state.signInForm.visible,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenSignInForm,
    signIn,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, ISignInFormProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);
