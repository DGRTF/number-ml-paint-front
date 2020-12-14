import React from "react";
import './PersonalAccount.scss';

import PersonalAccountSideBar from "../../components/PersonalAccountSideBar/PersonalAccountSideBar";
import Header from "../../components/Header/Header";


export default function PersonalAccount() {
  return (
    <div className='personal-account'>
      <Header/>
      <PersonalAccountSideBar />
    </div>
  );
}