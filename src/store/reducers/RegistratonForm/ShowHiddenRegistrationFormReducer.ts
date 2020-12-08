import {
  showRegistrationForm,
  hiddenRegistrationForm,
} from '../../actions/RegistrationForm/showHiddenRegistrationForm';

export type ActionTypes =
  ReturnType<typeof showRegistrationForm>
  | ReturnType<typeof hiddenRegistrationForm>
  ;

export const showHiddenRegistrationFormReducer = function (state: {
  showHiddenRegistrationForm: boolean
} = {
    showHiddenRegistrationForm: false
  }, action: ActionTypes) {
  switch (action.type) {
    case "SHOW_REGISTRATION_FORM":
      return { ...state, showHiddenRegistrationForm: action.payload.showHiddenRegistrationForm }
    case "HIDDEN_REGISTRATION_FORM":
      return { ...state, showHiddenRegistrationForm: action.payload.showHiddenRegistrationForm }
    default:
      return state
  }
}


export default showHiddenRegistrationFormReducer;