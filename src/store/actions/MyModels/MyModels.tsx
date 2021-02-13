import { stateType } from '../../store';
import { getLiteralFromString } from '../actions';
import { Models, getMyModels } from '../../../api/aiModels';



export function getModels() {
  return async function (dispatch: any, getState: () => stateType) {
    const models: Models[] = await getMyModels();

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