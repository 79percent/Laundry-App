import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  block1: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
  },
  block1ClearText: {
    fontSize: pixelX(20),
    color: '#fff',
  },
  block2: {
    flex: 2.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
  },
  block2Left: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  block2Center: {
    width: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  block2Right: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  block2Text1: {
    fontSize: pixelX(22),
    color: '#fff',
  },
  block2Text2: {
    fontSize: pixelX(20),
    color: '#fff',
    marginVertical: pixelX(7),
  },
  block2Text3: {
    fontSize: pixelX(20),
    color: '#fff',
  },
  slash: {
    width: pixelX(100),
    height: pixelX(1),
    backgroundColor: '#fff',
    transform: [{ rotate: '-60deg' }],
  },
  block3: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: pixelX(1),
  },
  block4: {
    flex: 7,
    borderBottomColor: '#fff',
    borderBottomWidth: pixelX(1),
  },
  month: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: pixelX(15),
  },
  monthText: { fontSize: pixelX(24), color: '#fff' },
  day: { flex: 5, flexDirection: 'row', flexWrap: 'wrap' },
  dayItem: {
    width: windowW / 7,
    height: windowW / 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: pixelX(5),
  },
  dayItemText: { fontSize: pixelX(16), color: '#fff' },
  choosedDayItem: { fontSize: pixelX(16), color: '#000' },
  choosedStart: {
    borderTopLeftRadius: pixelX(windowW / 14),
    borderBottomLeftRadius: pixelX(windowW / 14),
    backgroundColor: '#fff',
  },
  choosedEnd: {
    borderTopRightRadius: pixelX(windowW / 14),
    borderBottomRightRadius: pixelX(windowW / 14),
    backgroundColor: '#fff',
  },
  choosedInner: {
    backgroundColor: '#fff',
  },
  choosedSingle: {
    borderRadius: pixelX(30),
    backgroundColor: '#fff',
  },
  scrollView: { flex: 1 },
  block5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelX(10),
  },
  block5Button: {
    width: '100%',
    height: '100%',
    borderRadius: pixelX(5),
    backgroundColor: '#B9E3E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block5ButtonText: {
    fontSize: pixelX(16),
    color: '#fff',
  },
});
