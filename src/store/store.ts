import { createStore, applyMiddleware } from 'redux';
import reducesApp from './reducers/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducesApp, applyMiddleware(thunk));

export type stateType = ReturnType<typeof store.getState>;

export default store;