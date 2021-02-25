import setAuthorized from '../../actions/authorize/authorize';

export type ActionTypes =
  ReturnType<typeof setAuthorized>;

export const authorize = (state: {
  isAuthorized: boolean;
} = {
  isAuthorized: checkAuthorized(),
}, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_AUTHORIZED':
      return { ...state, isAuthorized: action.payload.isAuthorized };
    default:
      return state;
  }
};

function checkAuthorized(): boolean {
  const token = localStorage.getItem('access_token');

  if (token) return true;

  return false;
}

export default authorize;
