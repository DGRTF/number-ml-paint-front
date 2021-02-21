import {
  showHiddenSignInForm,
} from '../../actions/SignInForm/SignInForm';

export type ActionTypes =
  ReturnType<typeof showHiddenSignInForm>;

function signInForm(state: {
  visible: boolean;
} = {
  visible: false,
}, action: ActionTypes) {
  switch (action.type) {
    case 'SHOW_HIDDEN_SIGN_IN_FORM':
      return { ...state, visible: action.payload.visible };
    default:
      return state;
  }
}

export default signInForm;
