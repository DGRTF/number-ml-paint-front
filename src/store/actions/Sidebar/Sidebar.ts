import getLiteralFromString from '../actions';

export function showHiddenSidebar(state: {
  visible: boolean;
}) {
  return {
    type: getLiteralFromString('SHOW_HIDDEN_SIDEBAR'),
    payload: state,
  };
}

export type showHiddenSidebarType = typeof showHiddenSidebar;
