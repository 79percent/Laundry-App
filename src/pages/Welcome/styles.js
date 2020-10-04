import { StyleSheet } from 'react-native';
import { pixelX, pixelY } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoBox: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: pixelX(150),
    height: pixelX(150),
    borderRadius: pixelX(75),
    marginBottom: pixelY(40),
  },
  logoText: {
    color: '#fff',
    fontSize: pixelX(18),
  },
  btnsBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: pixelX(240),
    height: pixelY(40),
    borderRadius: pixelY(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    borderWidth: pixelX(1),
    borderColor: '#fff',
    marginBottom: pixelY(20),
  },
  btn2: {
    backgroundColor: '#6785BF',
  },
  btnText: {
    color: '#fff',
    fontSize: pixelX(16),
  },
});

export default styles;
