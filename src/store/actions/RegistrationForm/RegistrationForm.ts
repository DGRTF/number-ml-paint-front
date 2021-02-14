import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';
import { changeName } from '../Header/Header';



export function registration(formData:FormData, authorize: (formData: FormData) => Promise<boolean>) {
  return async function (dispatch: any, getState: () => stateType) {
    const isOk = await authorize(formData);

    if (isOk) {
      dispatch(showHiddenRegistrationForm({
        visible: false,
      }));

      dispatch(changeName({
        name: localStorage.getItem('username') || '',
      }));
    }
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