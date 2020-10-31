import { StyleSheet } from 'react-native';
import { CONTENT_LIST_INDEX, CONTENT_LIST_TAG } from './utils';
import { windowW, windowH, pixelX, pixelY } from '../../utils';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  // 中间内容
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  contentList: {
    backgroundColor: '#fff',
  },
  // 1.选择当前的定位
  // 定位的样式
  // 2.渲染最近打开的地理位置
  contentListTagMap: {
    height: CONTENT_LIST_TAG,
    width: windowW,
    paddingHorizontal: pixelX(20),
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentListTagTextMap: {
    height: CONTENT_LIST_TAG,
    width: (windowW - 30) / 3,
    backgroundColor: '#f5f5f5',
  },
  contentListTagTextMapIn: {
    lineHeight: CONTENT_LIST_TAG - pixelX(30),
    height: CONTENT_LIST_TAG - pixelX(30),
    width: (windowW - 40) / 3,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#999',
    fontWeight: 'bold',
    borderRadius: pixelX(10),
    borderWidth: 1,
    borderColor: '#ddd',
  },
  // 3.渲染整个列表
  contentListIndex: {
    height: CONTENT_LIST_INDEX,
    width: windowW,
    paddingHorizontal: pixelX(20),
    backgroundColor: '#f5f5f5',
  },
  contentListIndexText: {
    height: CONTENT_LIST_INDEX,
    width: windowW,
    lineHeight: CONTENT_LIST_INDEX,
    fontSize: pixelX(16),
    color: '#797979',
    fontFamily: 'iconfont',
  },
  contentListTag: {
    height: CONTENT_LIST_TAG,
    width: windowW,
    paddingHorizontal: pixelX(20),
    backgroundColor: '#fff',
  },
  contentListTagText: {
    height: CONTENT_LIST_TAG,
    width: windowW,
    lineHeight: CONTENT_LIST_TAG,
    color: '#999',
    fontWeight: 'bold',
  },
  // 右侧
  rightIndex: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: windowH,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  indexBox: {
    width: pixelX(23),
    height: pixelY(25),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexText: {
    fontSize: pixelX(14),
    color: '#9b9b9b',
    fontWeight: 'bold',
  },
});
export default styles;
