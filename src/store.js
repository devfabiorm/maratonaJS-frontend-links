import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPrimise from 'redux-promise';

import accountReducer from './reducers/AccountReducer';

const reducers = combineReducers({
    account: accountReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPrimise));

export default store;