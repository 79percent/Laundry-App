import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW, pixelX2 } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  tipBox: {
    width: '100%',
    height: pixelY(33),
    backgroundColor: '#F6F3F7',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: pixelX(17),
  },
  tip: {
    color: '#A4A1A4',
    fontSize: pixelX(12),
  },
  block1: {
    width: windowW,
    height: windowW * 0.7 + pixelY(20),
    backgroundColor: '#F6F3F7',
    paddingBottom: pixelY(20),
  },
  datePickerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dateSwitchBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dataBox: {
    flex: 2,
    backgroundColor: '#fff',
  },
  chartBox: {
    width: windowW,
    height: windowW * 0.618,
  },
  payWayBox: {
    width: windowW,
    height: pixelX(600),
    paddingBottom: pixelX(220)
  },
  parWayTextBox: {
    width: '100%',
    height: pixelX(60),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: pixelX(20),
    borderBottomColor: '#ccc',
    borderBottomWidth: pixelX(1),
  },
  parWayText: {
    fontSize: pixelX(18),
    color: '#000',
  },
  circleCharts: {
    flex: 4,
    flexDirection: 'row',
  },
  itemDataBox: {
    flex: 1.2,
    flexDirection: 'row'
  },
  itemDataBoxItem: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: pixelX(20)
  },
  itemDataBoxItemLine: {
    borderLeftColor: '#ccc',
    borderLeftWidth: pixelX2(0.5),
  },
  itemDataBoxItemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemRowLabel: {
    fontSize: pixelX(15),
    color: '#AAA8AB',
    marginRight: pixelX(15)
  },
  circleChartItem: {
    flex: 1,
    flexDirection: 'column',
  },
  circleChartItemLabel: {
    width: '100%',
    height: pixelX(40),
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleChartItemLabelText1: {
    fontSize: pixelX(18),
    color: '#52A0FF'
  },
  circleChartItemLabelText2: {
    fontSize: pixelX(18),
    color: '#4EC67A'
  },
});
