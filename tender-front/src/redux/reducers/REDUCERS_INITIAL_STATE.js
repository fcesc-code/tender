const REDUCERS_INITIAL_STATE = {
  project: { data: {}, flow: {}, current: {}, calculated: {} },
  portfolio: { data: {}, flow: {}, calculated: {} },
  budget: { data: {}, calculated: {} },
  quotation: { data: {}, calculated: {} },
  user: {},
  apiCallsInProgress: 0,
  errors: []
};

export default REDUCERS_INITIAL_STATE;