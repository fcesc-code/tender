import ACTION_TYPES from './../actions/ACTION_TYPES';
import REDUCERS_INITIAL_STATE from './REDUCERS_INITIAL_STATE';

export default function positionReducer(state = REDUCERS_INITIAL_STATE.position, action = ACTION_TYPES.DEFAULT) {
  switch (action.type) {
    case ACTION_TYPES.QUOTATION.CREATE_QUOTATION:
      return action.payload;
    case ACTION_TYPES.QUOTATION.UPDATE_QUOTATION:
      return action.payload;
    case ACTION_TYPES.QUOTATION.DELETE_QUOTATION:
      return {};
    case ACTION_TYPES.QUOTATION.LOAD_QUOTATION:
      return action.payload;
    case ACTION_TYPES.QUOTATION.ADD_DISCOUNT_QUOTATION:
      return action.payload;
    case ACTION_TYPES.QUOTATION.UPDATE_DISCOUNT_QUOTATION:
      return action.payload;
    default:
      return state;
  }
}