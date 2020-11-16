import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  scrollView: {
    width: '100%',
    flex: 1,
  },
  avatarBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: pixelY(250),
    paddingBottom: pixelY(50),
    backgroundColor: '#fff',
  },
  avatar: {
    width: pixelX(100),
    height: pixelX(100),
    borderRadius: pixelX(100) / 2,
    borderWidth: pixelX(1),
    borderColor: '#ccc',
  },
  userName: {
    color: '#000',
    fontSize: pixelX(20),
    marginVertical: pixelY(10),
  },
  vip: {
    backgroundColor: '#82B5ED',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixelX(20),
    paddingVertical: pixelX(5),
    borderRadius: pixelX(20),
  },
  vipText: {
    color: '#fff',
    fontSize: pixelX(14),
  },
  block: {
    width: '100%',
    height: pixelY(310),
    paddingBottom: pixelY(50),
    position: 'relative',
  },
  block1: {
    width: windowW - pixelX(20),
    height: pixelY(100),
    position: 'absolute',
    left: pixelX(20) / 2,
    top: pixelY(200),
    paddingVertical: pixelY(15),
    borderRadius: pixelX(10),
    backgroundColor: '#fff',
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  block1Item: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block1ItemLine: {
    borderLeftWidth: pixelX(1),
    borderLeftColor: '#E3B971',
  },
  block1ItemText: {
    color: '#333',
    fontSize: pixelX(12),
    marginTop: pixelY(5),
  },
  section: {
    width: '100%',
    marginBottom: pixelY(10),
    paddingHorizontal: pixelX(10),
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
    backgroundColor: '#fff',
    paddingVertical: pixelX(15),
  },
  sectionItemLine: {
    borderTopWidth: pixelX(1),
    borderTopColor: '#E3B971',
  },
  sectionItemTopradius: {
    borderTopLeftRadius: pixelX(10),
    borderTopRightRadius: pixelX(10),
  },
  sectionItemBottomradius: {
    borderBottomLeftRadius: pixelX(10),
    borderBottomRightRadius: pixelX(10),
  },
  sectionItemLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionItemLeftLabel: {
    color: '#000',
    fontSize: pixelX(16),
    marginLeft: pixelX(10),
  },
});

export default styles;
