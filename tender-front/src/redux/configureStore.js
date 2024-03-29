import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(REDUCERS_INITIAL_STATE) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    REDUCERS_INITIAL_STATE,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
