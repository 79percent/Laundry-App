import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  tipBox: {
    width: '100%',
    height: pixelY(33),
    backgroundColor: '#F6F3F7',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: pixelX(17),
  },
  tip: {
    color: '#A4A1A4',
    fontSize: pixelX(12),
  },
  block1: {
    width: windowW,
    height: windowW * 0.618,
    backgroundColor: '#fff',
    marginBottom: pixelY(20),
  },
  datePickerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateSwitchBox: {
    flex: 1,
    backgroundColor: 'pink',
  },
  dataBox: {
    flex: 2,
    backgroundColor: 'green',
  },
});
