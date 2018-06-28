import rootReducer from './reducers';
import { createStore, compose } from 'redux';

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

export default (initialState = {}) => {
    console.log(initialState);
	return createStore(rootReducer, initialState, enhancers)
}