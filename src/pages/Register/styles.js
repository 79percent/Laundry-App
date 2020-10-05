import { StyleSheet } from 'react-native';
import { pixelX, pixelY } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: pixelX(20),
  },
  title: {
    fontSize: pixelX(25),
    color: '#000',
    marginVertical: pixelY(40),
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pixelY(50),
  },
  itemborderBottom: {
    borderBottomColor: '#ccc',
    borderBottomWidth: pixelX(1),
  },
  itemLeft: {
    flex: 1,
  },
  itemLeftLabel: {
    fontSize: pixelX(16),
    color: '#000',
  },
  itemRight: {
    flex: 2.8,
  },
  itemRightInput: {
    fontSize: pixelX(16),
  },
  itemRightLabel: {
    fontSize: pixelX(16),
    color: '#4BA098',
  },
  registerBtn: {
    height: pixelY(40),
    backgroundColor: '#4BA098',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelY(30),
    borderRadius: pixelY(8),
  },
  registerBtnText: {
    color: '#fff',
    fontSize: pixelX(16),
  },
});

export default styles;
