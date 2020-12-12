import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

const imgW = 1100;
const imgH = 725;

const footerImgW = 1000;
const footerImgH = 283;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  block1: {
    height: pixelY(50),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block1Touch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#333',
    fontSize: pixelX(18),
    marginHorizontal: pixelX(5),
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
    width: pixelX(80),
    height: pixelX(80),
  },
  block5: {
    width: '100%',
    height: pixelY(70),
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
  block6: {
    width: windowW,
    height: (windowW * footerImgH) / footerImgW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block6SwiperBox: {
    width: pixelX(300),
    height: pixelY(60),
    backgroundColor: '#fff',
    elevation: 4,
  },
  block6SwiperBoxItem: {
    flex: 1,
  },
  block6SwiperBoxItemTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block6SwiperBoxItemTopText: {
    color: '#696f7a',
    fontSize: pixelX(12),
  },
  block6SwiperBoxItemBottom: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  block6SwiperBoxItemBottomLeft: {
    width: pixelX(40),
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  block6SwiperBoxItemBottomCenter: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block6SwiperBoxItemBottomRight: {
    width: pixelX(40),
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  block6SwiperBoxItemBottomText: {
    color: '#696f7a',
    fontSize: pixelX(16),
  },
});

export default styles;
