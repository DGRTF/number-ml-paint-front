import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';



export interface Models {
  id: number;
  name: string;
}

export function getModels() {
  return async function (dispatch: any, getState: () => stateType) {
    const response = await fetch('AIModels/GetMyModels', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('access_token'),
      }
    });

    const models: Models[] = await response.json();
    dispatch(setModels({
      models
    }));
  }
}

export function setModels(state: {
  models: Models[]
}) {
  return {
    type: getLiteralFromString('SET_MODELS'),
    payload: state
  }
}



export type getModelsType = typeof getModels;
export type setModelsType = typeof setModels;