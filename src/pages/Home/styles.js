import { StyleSheet } from 'react-native';
import { pixelX, pixelY } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block1: {
    height: pixelY(50),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#ccc',
    fontSize: pixelX(16),
  },
});

export default styles;
