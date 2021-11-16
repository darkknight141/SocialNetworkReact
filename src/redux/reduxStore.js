import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import searchReducer from './searchReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    searchPage:searchReducer,

});

let store = createStore(reducers);


export default store