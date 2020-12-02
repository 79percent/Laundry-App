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
  section: {
    width: '100%',
    padding: pixelX(20),
  },
  sectionTitle: {
    fontSize: pixelX(20),
    fontWeight: 'bold',
    color: '#4B7490',
    marginBottom: pixelX(20),
  },
  sectionContent: {},
  sectionContentText: {
    fontSize: pixelX(16),
    color: '#000',
    lineHeight: pixelX(28),
  },
  mgbt: {
    marginBottom: pixelX(15),
  },
  sectionContentImgBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContentImg: {
    width: pixelX(300),
  },
});
