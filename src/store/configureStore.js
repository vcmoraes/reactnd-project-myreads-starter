import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { routerMiddleware, connectRouter } from "connected-react-router";

const configureStore = history => {
  let store = createStore(
    connectRouter(history)(reducers),
    applyMiddleware(routerMiddleware(history), thunk)
  );
  return store;
};

export default configureStore;
