import * as actionTypes from "../actions";

const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTRATION_SUCCESS:
      state = {
        ...state,
        isAuthenticated: true
      };
      return state;

    case actionTypes.REGISTRATION_FAIL:
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
