import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';
import { hiddenRegistrationForm } from '../RegistrationForm/ShowHiddenRegistrationForm';


export function getName(formData: FormData, path: string) {
  return async function (dispatch: any, getState: () => stateType) {
    fetch(path, {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        dispatch(hiddenRegistrationForm());
      }
      return response.json();
    })
      .then(json => {
        localStorage.setItem('access_token', json.access_token)
        dispatch(changeName({
          name: json.username,
        }));
      })
      .catch(error => alert('Что-то пошло не так :(' + error));
  }
}



export function changeName(state: {
  name: string;
}) {
  return {
    type: getLiteralFromString('CHANGE_NAME'),
    payload: state
  }
}



export type changeNameType = typeof changeName;
export type getNameType = typeof getName;