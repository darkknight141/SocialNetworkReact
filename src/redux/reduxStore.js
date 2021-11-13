import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,

});

let store = createStore(reducers);


export default store