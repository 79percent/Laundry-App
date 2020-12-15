import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: pixelX(1),
    height: pixelX(70),
    backgroundColor: '#ccc',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: pixelX(16),
    color: 'rgb(90,90,92)',
  },
  price: {
    fontSize: pixelX(26),
    color: '#000',
    marginVertical: pixelX(10),
  },
  text: {
    fontSize: pixelX(14),
    color: 'rgb(90,90,92)',
  },
});
