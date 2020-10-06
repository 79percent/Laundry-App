import { actionTypes } from './action';

const { SAVE_USER_INFO } = actionTypes;

const defaultStateUserInfo = {
  isLoggedIn: false,
  nickName: '',
  mobile: '',
  password: '',
};

const userInfo = (state = defaultStateUserInfo, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default userInfo;
