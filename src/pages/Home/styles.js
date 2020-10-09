import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

const imgW = 2560;
const imgH = 1600;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block1: {
    height: pixelY(45),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#333',
    fontSize: pixelX(18),
  },
  block2: {
    width: windowW,
    height: (windowW * imgH) / imgW,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  block3: {
    height: pixelY(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  block3Text: {
    fontSize: pixelX(20),
    color: '#6F6F6F',
  },
  block4: {
    backgroundColor: '#fff',
    width: '100%',
    height: pixelY(120),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  block4Item: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  block4ItemLabel: {
    fontSize: pixelX(18),
    color: '#333',
  },
  block4ItemImg: {
    width: pixelY(80),
    height: pixelY(80),
  },
});

export default styles;
