import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.scss';




interface ImapDispatchToProps {
  showHiddenRegistrationForm: showHiddenRegistrationFormType;
  showHiddenSignInForm: showHiddenSignInFormType;
  changeName: changeNameType;
}

interface ImapStateToProps {
  name?: string;
}

interface IHeaderProps extends ImapDispatchToProps, ImapStateToProps { }

class Header extends Component<IHeaderProps>{
  constructor(props: any) {
    super(props);;
  }

  render() {
    return (
      <header className='header'>
        <div className='header__label'></div>
        <div className='header__menu'></div>
        {this.props.name ?
          <div className='header__in'>
            <Button name={this.props.name} />
          </div> :
          <div className='header__in'>
            <Button name='Войти'
              handler={this.showSignInForm.bind(this)} />
            <Button
              name='Зарегистрироваться'
              handler={this.showRegistrationForm.bind(this)}
            />
          </div>}
      </header>
    )
  }

  componentDidMount() {
    this.Initialize();
  }

  Initialize() {
    const token = localStorage.getItem('access_token');

    if (token) {
      const name = localStorage.getItem('user_name');

      this.props.changeName({
        name: name,
      });
    }
  }

  showRegistrationForm() {
    this.props.showHiddenRegistrationForm({
      visible: true,
    });
  }

  showSignInForm() {
    this.props.showHiddenSignInForm({
      visible: true,
    })
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showHiddenRegistrationForm,
  showHiddenRegistrationFormType
} from "../../store/actions/RegistrationForm/RegistrationForm";

import { bindActionCreators } from 'redux';

import {
  showHiddenSignInForm,
  showHiddenSignInFormType
} from '../../store/actions/SignInForm/SignInForm';

import {
  changeName,
  changeNameType
} from '../../store/actions/Header/Header';



const mapStateToProps = (state: stateType) => {
  return {
    name: state.header.name,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenRegistrationForm,
    showHiddenSignInForm,
    changeName,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IHeaderProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(Header);
