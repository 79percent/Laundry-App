export const actionTypes = {
  SIGN_IN: 'SIGN_IN', // 注册
  LOGIN_IN: 'LOGIN_IN', // 登录
  LOGIN_OUT: 'LOGIN_OUT', // 退出登录
  SAVE_USER_INFO: 'SAVE_USER_INFO', // 保存用户信息
};

// 注册
export const signIn = params => {
  return {
    type: actionTypes.SIGN_IN,
    payload: params,
  };
};

// 登录
export const loginIn = params => {
  return {
    type: actionTypes.LOGIN_IN,
    payload: params,
  };
};

// 退出登录
export const loginOut = () => {
  return {
    type: actionTypes.LOGIN_OUT,
  };
};

// 保存用户信息
export const saveUserInfo = params => {
  return {
    type: actionTypes.SAVE_USER_INFO,
    payload: params,
  };
};
