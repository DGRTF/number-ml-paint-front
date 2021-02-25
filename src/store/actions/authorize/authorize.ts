import getLiteralFromString from '../actions';

export default function setAuthorized(state: {
  isAuthorized: boolean;
}) {
  return {
    type: getLiteralFromString('SET_AUTHORIZED'),
    payload: state,
  };
}

export type setAuthorizedType = typeof setAuthorized;
