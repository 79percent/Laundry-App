import { actionTypes } from './action';

const { SIGN_IN, LOGIN_IN, LOGIN_OUT } = actionTypes;

const defaultStateUserInfo = {
  isLoggedIn: false,
  nickName: '',
  mobile: '',
  password: '',
};

const userInfo = (state = defaultStateUserInfo, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      return {
        ...payload,
        isLoggedIn: true,
      };
    case LOGIN_IN:
      return {
        ...payload,
        isLoggedIn: true,
      };
    case LOGIN_OUT:
      return {
        ...defaultStateUserInfo,
      };
    default:
      return state;
  }
};
export default userInfo;
