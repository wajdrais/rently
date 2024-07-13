import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { errorreducer } from "./reducer/Errorreducer";
import { userreducer } from "./reducer/Ureducer";
import productReducer from "./reducer/Preducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({
  users: userreducer,
  products : productReducer,
  errors: errorreducer,
});
const store = createStore(
  rootreducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
