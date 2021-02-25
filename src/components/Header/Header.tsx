import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button/Button';

import { stateType } from '../../store/store';

import {
  showHiddenRegistrationForm,
  showHiddenRegistrationFormType,
} from '../../store/actions/RegistrationForm/RegistrationForm';

import {
  showHiddenSignInForm,
  showHiddenSignInFormType,
} from '../../store/actions/SignInForm/SignInForm';

import {
  changeName,
  changeNameType,
} from '../../store/actions/Header/Header';

import {
  showHiddenSidebar,
  showHiddenSidebarType,
} from '../../store/actions/Sidebar/Sidebar';

import setAuthorized, { setAuthorizedType } from '../../store/actions/authorize/authorize';

interface ImapDispatchToProps {
  showHiddenRegistrationForm?: showHiddenRegistrationFormType;
  showHiddenSignInForm?: showHiddenSignInFormType;
  changeName?: changeNameType;
  showHiddenSidebar?: showHiddenSidebarType;
  setAuthorized?: setAuthorizedType;
}

interface ImapStateToProps {
  name?: string;
}

interface IHeaderProps extends ImapDispatchToProps, ImapStateToProps {
  history?: any;
 }

class Header extends Component<IHeaderProps> {
  private readonly history = createBrowserHistory();

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.initializeName();
  }

  private initializeName = () => {
    const token = localStorage.getItem('access_token');

    if (token) {
      const name = localStorage.getItem('user_name');

      this.props.changeName({
        name,
      });
    }
  }

  private showRegistrationForm = () => {
    this.props.showHiddenRegistrationForm({
      visible: true,
    });
  }

  private showSignInForm = () => {
    this.props.showHiddenSignInForm({
      visible: true,
    });
  }

  private exitProfile = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_name');

    this.props.changeName({
      name: null,
    });

    this.props.setAuthorized({
      isAuthorized: false,
    });
  }

  private showSidebar = () => {
    this.props.showHiddenSidebar({
      visible: true,
    });
  }

  render() {
    return (
      <header className="header">
        {this.props.name
          ? (
            <>
              <Button
                name="Menu"
                handler={this.showSidebar}
              />
              <Link to="/">
                <Button name="Главная" />
              </Link>
              <div className="header__menu" />
              <div className="header__label" />

              <div className="header__in">
                <Link to="personal">
                  <Button name={this.props.name} />
                </Link>
                <Button
                  name="Выйти"
                  handler={this.exitProfile}
                />
              </div>
            </>
          )
          : (
            <div className="header__in">
              <Button
                name="Войти"
                handler={this.showSignInForm}
              />
              <Button
                name="Зарегистрироваться"
                handler={this.showRegistrationForm}
              />
            </div>
          )}
      </header>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  name: state.header.name,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenRegistrationForm,
    showHiddenSignInForm,
    changeName,
    showHiddenSidebar,
    setAuthorized,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IHeaderProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Header));
