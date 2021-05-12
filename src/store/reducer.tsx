import { combineReducers, createStore } from 'redux';
import { usersListReducer, newUserReducer } from './reducers';

const reducers = combineReducers({
    usersList: usersListReducer,
    newUser: newUserReducer,
});

const store = createStore(reducers);

export default store;
