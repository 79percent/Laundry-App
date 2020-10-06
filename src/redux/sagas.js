import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actionTypes, saveUserInfo } from './modules/userInfo/action';
import { setStorage, removeStorage } from '../utils';

const { SIGN_IN, LOGIN_IN, LOGIN_OUT } = actionTypes;

// saga主函数
function* sagas() {
  yield takeEvery(SIGN_IN, signIn);
  yield takeEvery(LOGIN_IN, loginIn);
  yield takeEvery(LOGIN_OUT, loginOut);
}

function* signIn({ payload }) {
  const res = yield call(setStorage, { key: 'user', value: payload });
  if (res) {
    const action = saveUserInfo({
      isLoggedIn: true,
      ...payload,
    });
    yield put(action);
  }
}

function* loginIn({ payload }) {
  const res = yield call(setStorage, { key: 'user', value: payload });
  if (res) {
    const action = saveUserInfo({
      isLoggedIn: true,
      nickName: '昵称',
      ...payload,
    });
    yield put(action);
  }
}

function* loginOut() {
  const res = yield call(removeStorage, 'user');
  if (res) {
    const action = saveUserInfo({
      isLoggedIn: false,
      nickName: '',
      mobile: '',
      password: '',
    });
    yield put(action);
  }
}

export default sagas;
