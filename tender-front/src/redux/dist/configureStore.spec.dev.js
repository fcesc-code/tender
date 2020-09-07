"use strict";

var _configureStore = _interopRequireDefault(require("./configureStore"));

var _initialState = _interopRequireDefault(require("./reducers/initialState"));

var _redux = require("redux");

var _reduxImmutableStateInvariant = _interopRequireDefault(require("redux-immutable-state-invariant"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import userActions from './actions/userActions';
describe('CONFIGURE STORE - REDUX - test set', function () {
  it('Should dispatch an action', function () {
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    var store = (0, _redux.createStore)(_rootReducer["default"], _initialState["default"], composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"], (0, _reduxImmutableStateInvariant["default"])()))); // const expectedResult = "auth0|5f53d71242e345006db2cc02";
    // const testAction = {
    //   type: ACTION_TYPES.USER.SAVE_CURRENT_USER,
    //   payload: expectedResult
    // };
    // store.dispatch(testAction);
    // const testResult = store.getState().currentUser;

    var testResult = (0, _configureStore["default"])(_initialState["default"]);
    expect(store).toMatchObject(testResult);
  });
});