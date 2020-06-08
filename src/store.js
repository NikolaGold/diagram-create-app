import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {allReducer} from './reducer';

const middleware = compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : ((f) => f),
);

export const store = createStore(allReducer, middleware);
