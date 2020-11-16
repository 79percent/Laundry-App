import { combineReducers } from 'redux';
import userInfo from './modules/userInfo/reducer';
import home from './modules/home/reducer';

const reducer = combineReducers({
  userInfo,
  home,
});

export default reducer;
