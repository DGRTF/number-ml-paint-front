import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';

export function showRegistrationForm() {
  return {
    type: getLiteralFromString('SHOW_REGISTRATION_FORM'),
    payload: {
      showHiddenRegistrationForm: true,
    }
  }
}

export function hiddenRegistrationForm() {
  return {
    type: getLiteralFromString('HIDDEN_REGISTRATION_FORM'),
    payload: {
      showHiddenRegistrationForm: false,
    }
  }
}

export type showRegistrationFormType = typeof showRegistrationForm;
export type hiddenRegistrationFormType = typeof hiddenRegistrationForm;