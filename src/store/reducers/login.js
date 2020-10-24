import * as actionTypes from "../actions";

const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      state = {
        ...state,
        isAuthenticated: true
      };
      return state;

    case actionTypes.LOGIN_FAILED:
      state = {
        ...state,
        isAuthenticated: false
      };
      return state;

    default:
      return state;
  }
};

export default reducer;
