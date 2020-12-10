import {
  changeContent,
  contentTypes,
} from '../../actions/Home/Home';

export type ActionTypes =
  ReturnType<typeof changeContent>
  ;

export const home = function (state: {
  content: contentTypes
} = {
    content: 'PaintBoard'
  }, action: ActionTypes) {
  switch (action.type) {
    case "SET_CONTENT":
      return { ...state, content: action.payload.content }
    default:
      return state
  }
}


export default home;