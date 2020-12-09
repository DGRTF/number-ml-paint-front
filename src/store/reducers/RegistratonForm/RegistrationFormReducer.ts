import {
  showHiddenRegistrationForm,
} from '../../actions/RegistrationForm/RegistrationForm';

export type ActionTypes =
  ReturnType<typeof showHiddenRegistrationForm>
  ;

export const registrationFormReducer = function (state: {
  visible: boolean
} = {
  visible: false
  }, action: ActionTypes) {
  switch (action.type) {
    case "SHOW_HIDDEN_REGISTRATION_FORM":
      return { ...state, visible: action.payload.visible }
    default:
      return state
  }
}


export default registrationFormReducer;