import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducesApp from './reducers/reducers';

const store = createStore(reducesApp, applyMiddleware(thunk));

export type stateType = ReturnType<typeof store.getState>;

export default store;
