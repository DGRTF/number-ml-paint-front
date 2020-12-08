import {
  changeName,
} from '../../actions/Header/Header';

export type ActionTypes =
  ReturnType<typeof changeName>
  ;

export const header = function (state: {
  name: string;
} = {
    name: null
  }, action: ActionTypes) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name }
    default:
      return state
  }
}


export default header;