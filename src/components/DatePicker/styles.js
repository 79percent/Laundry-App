import { StyleSheet } from 'react-native';
import { pixelX, pixelX2, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  box: {
    width: pixelX(160),
    height: pixelX(40),
    flexDirection: 'row',
    paddingVertical: pixelX(5),
    borderColor: '#ccc',
    borderWidth: pixelX2(0.5),
    borderRadius: pixelX(5),
  },
  left: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: pixelX2(0.5),
  },
  dateText: {
    fontSize: pixelX(16),
    color: '#333',
  },
  right: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: pixelX(24),
    height: pixelX(24),
  },
});
