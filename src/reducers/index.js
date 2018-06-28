import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import homeData from "./HomeReducer";
import searchData from "./SearchReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  homeData,
  searchData
});

export default rootReducer;
