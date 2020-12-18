import {
  setModels,
  Models,
} from '../../actions/MyModels/MyModels';

export type ActionTypes =
  ReturnType<typeof setModels>
  ;

export const myModels = function (state: {
  models: Models[];
} = {
  models: [],
  }, action: ActionTypes) {
  switch (action.type) {
    case "SET_MODELS":
      return { ...state, models: action.payload.models }
    default:
      return state
  }
}


export default myModels;