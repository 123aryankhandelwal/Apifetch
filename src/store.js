import { createStore } from "redux";
import rootReducer from "./redux/combinReducers";
// import {composeWithDevTools} from 'redux-devtools-extension';


const store=createStore(rootReducer);
export default store;