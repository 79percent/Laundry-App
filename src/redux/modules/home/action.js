export const actionTypes = {
  ON_SAVE_HOME: 'ON_SAVE_HOME',
};

// 保存
export const onSaveHome = params => {
  return {
    type: actionTypes.ON_SAVE_HOME,
    payload: params,
  };
};
