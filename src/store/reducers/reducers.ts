import { combineReducers } from 'redux';
import registrationFormReducer from './RegistratonForm/RegistrationFormReducer';
import header from './Header/Header';
import { signInForm } from './SignInForm/SignInForm';
import {sidebar}from'./Sidebar/Sidebar';

const appReducers = combineReducers({
  registrationFormReducer,
  header,
  signInForm,
  sidebar,
});

export default appReducers;