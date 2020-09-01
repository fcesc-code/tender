import ACTION_TYPES from './../actions/ACTION_TYPES';
import initialState from './initialState';

export default function positionReducer(state = initialState.position, action) {
  switch (action.type) {
    case ACTION_TYPES.POSITION.CREATE_POSITION:
      return action.payload;
    case ACTION_TYPES.POSITION.UPDATE_POSITION:
      return action.payload;
    case ACTION_TYPES.POSITION.DELETE_POSITION:
      return {};
    case ACTION_TYPES.POSITION.LOAD_POSITION:
      return action.payload;
    case ACTION_TYPES.POSITION.ADD_DISCOUNT_POSITION:
      return action.payload;
    case ACTION_TYPES.POSITION.UPDATE_DISCOUNT_POSITION:
      return action.payload;
    default:
      return state;
  }
}