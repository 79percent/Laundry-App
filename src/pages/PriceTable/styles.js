import { StyleSheet } from 'react-native';
import { pixelX, pixelY, pixelX2, pixelY2, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  indicatorStyle: {
    backgroundColor: '#9DC6E0',
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixelX(20),
    width: 'auto',
  },
  routePage: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  tableContent: {
    marginTop: pixelX(20),
    width: '100%',
    paddingHorizontal: pixelX(20),
    borderRadius: pixelX(10),
    overflow: 'hidden',
  },
  table: {
    flex: 1,
    borderRadius: pixelX(5),
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9DC6E0',
    width: '100%',
    paddingVertical: pixelY(5),
  },
  tableHeaderText: {
    color: '#fff',
    fontSize: pixelX(14),
  },
  tableRowText: {
    color: '#000',
    fontSize: pixelX(14),
  },
  tableHeaderType: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeaderPrice: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeaderCircle: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowType: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: pixelX2(0.5),
    borderRightColor: '#D8D8D8',
    paddingVertical: pixelY(5),
  },
  tableRowPrice: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: pixelX2(0.5),
    borderRightColor: '#D8D8D8',
    paddingVertical: pixelY(5),
  },
  tableRowCircle: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: pixelY(5),
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tableRowTopLine: {
    borderTopColor: '#D8D8D8',
    borderTopWidth: pixelX2(0.5),
  },
});
