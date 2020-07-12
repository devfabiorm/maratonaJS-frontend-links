import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPrimise from 'redux-promise';

import signInReducer from './screens/SignIn/SignInReducer';

const reducers = combineReducers({
    signIn: signInReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPrimise));

export default store;