import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  card1: {
    width: windowW - pixelX(20),
    height: pixelY(200),
    marginTop: pixelY(20),
  },
  card1TopSelect: {
    width: '100%',
    flexDirection: 'row',
    height: pixelY(40),
  },
  card1SiteSelect: {
    width: '100%',
    height: pixelY(160),
    backgroundColor: '#fff',
    borderTopLeftRadius: pixelX(10),
    borderBottomLeftRadius: pixelX(10),
    borderBottomRightRadius: pixelX(10),
  },
  card1TopSelect1: {
    flex: 1,
    paddingTop: pixelX(5),
    paddingLeft: pixelX(10),
    paddingRight: pixelX(5),
  },
  card1TopSelect2: {
    flex: 1,
    paddingLeft: pixelX(5),
    paddingRight: pixelX(0),
  },
  card1TopSelect1Content: {
    backgroundColor: '#E0F5FA',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: pixelX(10),
    borderTopRightRadius: pixelX(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1TopSelect1ContentText: {
    color: '#000',
    fontSize: pixelX(16),
  },
  card1TopSelect2Content: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: pixelX(10),
    borderTopRightRadius: pixelX(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1TopSelect2ContentText: {
    color: '#34A0ED',
    fontSize: pixelX(16),
  },
});
