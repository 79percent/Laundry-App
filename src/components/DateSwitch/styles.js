import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    width: pixelX(320),
    height: pixelX(40),
    borderColor: 'rgb(55,34,352)',
    borderWidth: pixelX(1),
    borderRadius: pixelX(5),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chossed: {
    backgroundColor: 'rgb(55,34,352)',
  },
  chossedText: {
    color: '#fff'
  },
  notChossedText: {
    color: '#000',
  },
  notChossed: {
    backgroundColor: '#fff',
  },
  line: {
    width: pixelX(1),
    height: '100%',
    backgroundColor: 'rgb(55,34,352)',
  }
});