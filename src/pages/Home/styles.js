import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

const imgW = 2560;
const imgH = 1600;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: pixelY(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  block3Text: {
    fontSize: pixelX(20),
    color: '#6F6F6F',
  },
  block4: {
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
  block5: {
    width: '100%',
    height: pixelY(65),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    marginTop: pixelY(20),
  },
  block5ItemLabel: {
    fontSize: pixelX(16),
    color: '#333',
  },
});

export default styles;
