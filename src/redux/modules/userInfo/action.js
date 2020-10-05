export const actionTypes = {
  SIGN_IN: 'SIGN_IN', // 注册
  LOGIN_IN: 'LOGIN_IN', // 登录
  LOGIN_OUT: 'LOGIN_OUT', // 退出登录
};

// 注册
export const signIn = params => {
  return {
    type: actionTypes.SIGN_IN,
    payload: params,
  };
};
