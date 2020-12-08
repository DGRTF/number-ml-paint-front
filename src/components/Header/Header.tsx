import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.scss';




interface ImapDispatchToProps {
  showRegistrationForm: showRegistrationFormType;
}

interface ImapStateToProps {
  name?: string;
}

interface IHeaderProps extends ImapDispatchToProps, ImapStateToProps { }

class Header extends Component<IHeaderProps>{
  constructor(props: any) {
    super(props);
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
            <Button name='Войти' />
            <Button
              name='Зарегистрироваться'
              handler={this.showRegistration.bind(this)}
            />
          </div>}
      </header>
    )
  }

  showRegistration() {
    this.props.showRegistrationForm();
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showRegistrationForm,
  showRegistrationFormType
} from "../../store/actions/RegistrationForm/ShowHiddenRegistrationForm";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: stateType) => {
  return {
    name: state.header.name,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showRegistrationForm,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IHeaderProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(Header);

// function f(returnState: stateType) {
//   const mapStateToProps = (state: stateType) => {
//     return returnState
//   }

//   function mapDispatchToProps(dispatch: any) {
//     return bindActionCreators({
//       showRegistrationForm,
//     }, dispatch)
//   }

//   return connect<ImapStateToProps, ImapDispatchToProps, IHeaderProps, stateType>(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Header);
// }
