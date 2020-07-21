import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPrimise from 'redux-promise';

import accountReducer from './reducers/AccountReducer';
import linkReducer from './reducers/LinkReducer';

const reducers = combineReducers({
    account: accountReducer,
    link: linkReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPrimise));

export default store;