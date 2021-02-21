import {
  showHiddenSidebar,
} from '../../actions/Sidebar/Sidebar';

export type ActionTypes =
  ReturnType<typeof showHiddenSidebar>;

function sidebar(state: {
  visible: boolean
} = {
  visible: false,
}, action: ActionTypes) {
  switch (action.type) {
    case 'SHOW_HIDDEN_SIDEBAR':
      return { ...state, visible: action.payload.visible };
    default:
      return state;
  }
}

export default sidebar;
