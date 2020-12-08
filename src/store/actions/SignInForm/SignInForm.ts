import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';
import { changeName } from '../Header/Header';



export function signIn(formData: FormData) {
  return async function (dispatch: any, getState: () => stateType) {
    fetch('token', {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        dispatch(showHiddenSignInForm({
          visible: false,
        }))
      }
      return response.json();
    })
      .then(json => {
        localStorage.setItem('access_token', json.access_token)
        dispatch(changeName({
          name: json.username,
        }));
      }).catch();
  }
}

export function showHiddenSignInForm (state: {
  visible: boolean;
}) {
  return {
    type: getLiteralFromString('SHOW_HIDDEN_SIGN_IN_FORM'),
    payload: state
  }
}



export type showHiddenSignInFormType = typeof showHiddenSignInForm;
export type signInType = typeof signIn;