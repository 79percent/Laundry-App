import { StyleSheet } from 'react-native';
import { pixelX, pixelY } from '../../utils';

const imgWH = (pixelY(160) - pixelX(10)) * (3 / 5.5);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemBox: {
    width: '100%',
    height: pixelY(160),
    paddingTop: pixelX(10),
    paddingHorizontal: pixelX(10),
  },
  itemContent: {
    width: '100%',
    height: '100%',
    borderRadius: pixelX(10),
    backgroundColor: '#fff',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingHorizontal: pixelX(10),
  },
  itemTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTopLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemTopLeftOrder: {
    color: '#333',
    fontSize: pixelX(14),
    marginLeft: pixelX(5),
  },
  itemTopRightTime: {
    color: '#F0742E',
    fontSize: pixelX(14),
    marginLeft: pixelX(5),
  },
  itemCenter: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemCenterLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemCenterLeftImg: {
    width: imgWH,
    height: imgWH,
  },
  itemCenterLeftLabel: {
    color: '#000',
    fontSize: pixelX(20),
    marginLeft: pixelX(20),
  },
  itemCenterRightText: {
    color: '#000',
    fontSize: pixelX(16),
  },
  itemBottom: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemBottomLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemBottomLeftText1: {
    color: '#333',
    fontSize: pixelX(15),
  },
  itemBottomLeftText2: {
    color: '#D36767',
    fontSize: pixelX(15),
    marginLeft: pixelX(5),
  },
  itemBottomRight: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemBottomRightAgain: {
    width: pixelX(80),
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CBC9C9',
    borderWidth: pixelX(1),
    borderRadius: pixelX(5),
  },
  itemBottomRightComment: {
    width: pixelX(80),
    height: '80%',
    backgroundColor: '#FFBB8E',
    marginLeft: pixelX(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pixelX(5),
  },
  itemBottomRightText: {
    color: '#000',
    fontSize: pixelX(14),
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default styles;
