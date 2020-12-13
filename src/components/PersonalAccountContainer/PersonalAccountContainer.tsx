import React, { Component } from 'react';
import PersonalAccountSideBar from '../PersonalAccountSideBar/PersonalAccountSideBar';
import './PersonalAccountContainer.scss';

export default class PersonalAccountContainer extends Component {
  render() {
    return (
      <div className='personal-account-container'>
        <PersonalAccountSideBar/>
      </div>
    )
  }
}
