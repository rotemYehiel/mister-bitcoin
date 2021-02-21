import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import AppReducer from './reducers/AppReducer';
import ContactReducer from './reducers/ContactReducer';
import UserReducer from './reducers/UserReducer'
import BitcoinReducer from "./reducers/BitcoinReducer";

const store = createStore(combineReducers({
    user: UserReducer,
    contact: ContactReducer,
    bitcoin: BitcoinReducer,
    app: AppReducer
}), applyMiddleware(thunk));


export default store