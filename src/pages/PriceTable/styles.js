import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#000',
    width: 350,
    height: 40,
  },
  trackStyle: {
    width: 200,
    height: 10,
  },
  thumbStyle: {
    width: 30,
    height: 30,
    borderWidth: 2,
  },
});
