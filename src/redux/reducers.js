import { combineReducers } from 'redux';
import userInfo from './modules/userInfo/reducer';

const reducer = combineReducers({
  userInfo,
});

export default reducer;
