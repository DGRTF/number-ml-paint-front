import { getLiteralFromString } from '../actions';



export type contentTypes = 
'PaintBoard'|
'VideoStream'
  ;

export function changeContent(state: {
  content: contentTypes;
}) {
  return {
    type: getLiteralFromString('SET_CONTENT'),
    payload: state
  }
}



export type changeContentType = typeof changeContent;