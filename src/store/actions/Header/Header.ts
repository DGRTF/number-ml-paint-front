import getLiteralFromString from '../actions';

export function changeName(state: {
  name: string;
}) {
  return {
    type: getLiteralFromString('CHANGE_NAME'),
    payload: state,
  };
}

export type changeNameType = typeof changeName;
