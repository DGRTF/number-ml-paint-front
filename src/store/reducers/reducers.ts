import { combineReducers } from 'redux';
import registrationFormReducer from './RegistratonForm/RegistrationFormReducer';
import header from './Header/Header';
import { signInForm } from './SignInForm/SignInForm';

const appReducers = combineReducers({
  registrationFormReducer,
  header,
  signInForm,
});

export default appReducers;