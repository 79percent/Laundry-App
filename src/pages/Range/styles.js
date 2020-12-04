import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5E2',
  },
  carBox: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  car: {
    // 1270 / 631
    width: pixelX(200),
    height: (pixelX(200) * 631) / 1270,
  },
  blockBox: {
    flex: 1,
    paddingLeft: pixelX(20),
  },
  block: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: pixelX(20),
  },
  blockText: {
    fontSize: pixelX(15),
    color: '#fff',
  },
  textBox: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: pixelX(20),
  },
  rangeText: {
    lineHeight: pixelX(22),
    fontSize: pixelX(14),
    color: '#000',
  },
  mapBox: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
