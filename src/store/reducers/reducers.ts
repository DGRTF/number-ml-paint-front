import { combineReducers } from 'redux';
import registrationFormReducer from './RegistratonForm/RegistrationFormReducer';
import header from './Header/Header';
import { signInForm } from './SignInForm/SignInForm';
import { sidebar } from './Sidebar/Sidebar';
import { home } from './Home/Home';
import { myModels } from './MyModels/MyModels';

const appReducers = combineReducers({
  registrationFormReducer,
  header,
  signInForm,
  sidebar,
  home,
  myModels,
});

export default appReducers;