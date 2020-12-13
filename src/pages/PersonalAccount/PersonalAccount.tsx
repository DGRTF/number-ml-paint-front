import React from "react";
import { Provider } from 'react-redux';
import './PersonalAccount.scss';

import store from '../../store/store';
import PersonalAccountContainer from "../../components/PersonalAccountContainer/PersonalAccountContainer";


export default function PersonalAccount() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='index'>
          <PersonalAccountContainer />
        </div>
      </Provider>
    </React.StrictMode>
  );
}