import { createStore, compose, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import configureStore from "./configureStore";
import initialState from "./reducers/REDUCERS_INITIAL_STATE";
import rootReducer from "./reducers/rootReducer";

describe("CONFIGURE STORE - REDUX - test set", () => {
  it("Should dispatch an action", () => {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );

    const testResult = configureStore(initialState);

    expect(store).toMatchObject(testResult);
  });
});
