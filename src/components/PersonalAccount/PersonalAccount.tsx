import React from "react";
import { Provider } from 'react-redux';
import PersonalAccountContainer from "../PersonalAccountContainer/PersonalAccountContainer";
import store from "../../store/store";
import './PersonalAccount.scss';



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