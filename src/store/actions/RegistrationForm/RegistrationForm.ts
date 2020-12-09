import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';
import { changeName } from '../Header/Header';



export function registration(formData: FormData) {
  return async function (dispatch: any, getState: () => stateType) {
    fetch('login', {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        dispatch(showHiddenRegistrationForm({
          visible: false,
        }));
      }
      return response.json();
    })
      .then(json => {
        localStorage.setItem('access_token', json.access_token);
        localStorage.setItem('user_name', json.username);
        dispatch(changeName({
          name: json.username,
        }));
      });
  }
}

export function showHiddenRegistrationForm(state: {
  visible: boolean;
}) {
  return {
    type: getLiteralFromString('SHOW_HIDDEN_REGISTRATION_FORM'),
    payload: state
  }
}



export type showHiddenRegistrationFormType = typeof showHiddenRegistrationForm;
export type registrationType = typeof registration;