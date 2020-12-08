import {combineReducers} from 'redux';
import showHiddenRegistrationFormReducer from './RegistratonForm/ShowHiddenRegistrationFormReducer';
import header from './Header/Header';

const appReducers = combineReducers({
  showHiddenRegistrationFormReducer,
  header,
});

export default appReducers;