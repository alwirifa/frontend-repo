import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers';

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
