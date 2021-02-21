import getLiteralFromString from '../actions';
import { changeName } from '../Header/Header';

type authorizeFunctionType = (formData: FormData) => Promise<boolean>;

export function registration(
  formData:FormData,
  authorize: authorizeFunctionType,
) {
  return async (dispatch: any) => {
    const isOk = await authorize(formData);

    if (isOk) {
      dispatch(showHiddenRegistrationForm({
        visible: false,
      }));

      dispatch(changeName({
        name: localStorage.getItem('username') || '',
      }));
    }
  };
}

export function showHiddenRegistrationForm(state: {
  visible: boolean;
}) {
  return {
    type: getLiteralFromString('SHOW_HIDDEN_REGISTRATION_FORM'),
    payload: state,
  };
}

export type showHiddenRegistrationFormType = typeof showHiddenRegistrationForm;
export type registrationType = typeof registration;
