import { createStore, combineReducers } from 'redux';

import AccountReducers from '../reducers/AccountReducers';

const rootReducer = combineReducers(
    { account: AccountReducers }
);

const store = () => {
    return createStore(rootReducer);
}
export default store;