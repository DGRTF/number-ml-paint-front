import getLiteralFromString from '../actions';

export function changeName(state: {
  name: string;
}) {
  return {
    type: getLiteralFromString('CHANGE_NAME'),
    payload: state,
  };
}

export function exitProfileChangeName(exitProfile: () => void) {
  return async (dispatch: any) => {
    exitProfile();

    dispatch(changeName({
      name: null,
    }));
  };
}

export type changeNameType = typeof changeName;
export type exitProfileChangeNameType = typeof exitProfileChangeName;
