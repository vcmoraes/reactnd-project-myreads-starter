import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'
import homeData from "./HomeReducer";

const rootReducer = combineReducers({ routing: routerReducer, homeData });

export default rootReducer;
