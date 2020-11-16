import { actionTypes } from './action';

const { ON_SAVE_HOME } = actionTypes;

const defaultState = {
  bannerArr: [],
  typesArr: [],
  serviceArr: [],
  commentsList: [],
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ON_SAVE_HOME:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
