import { StyleSheet } from 'react-native';
import { pixelX, pixelY, windowW, isIphoneX } from '../../utils';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  card1: {
    width: windowW - pixelX(20),
    height: pixelY(200),
    marginTop: pixelY(20),
    marginHorizontal: pixelX(10),
  },
  card1TopSelect: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: pixelY(40),
  },
  card1SiteSelect: {
    width: '100%',
    height: pixelY(160),
    backgroundColor: '#fff',
    borderBottomLeftRadius: pixelX(5),
    borderBottomRightRadius: pixelX(5),
    overflow: 'hidden',
  },
  card1SiteSelectLeft: {
    borderTopLeftRadius: pixelX(5),
  },
  card1SiteSelectRight: {
    borderTopRightRadius: pixelX(5),
  },
  card1TopSelect1: {
    width: '50%',
    height: '100%',
  },
  card1TopSelect1Content: {
    backgroundColor: '#E0F5FA',
    flex: 1,
    borderTopLeftRadius: pixelX(10),
    borderTopRightRadius: pixelX(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1TopSelect1ContentText: {
    color: '#000',
    fontSize: pixelX(16),
  },
  card1TopSelect1ContentTextSelect: {
    color: '#34A0ED',
    fontSize: pixelX(16),
  },
  card1TopSelect1ContentTextNoSelect: {
    color: '#000',
    fontSize: pixelX(16),
  },
  card1TopSelect2Content: {
    backgroundColor: '#E0F5FA',
    flex: 1,
    borderTopLeftRadius: pixelX(10),
    borderTopRightRadius: pixelX(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1TopSelect2ContentText: {
    color: '#34A0ED',
    fontSize: pixelX(16),
  },
  cardTopNoSelected: {
    paddingTop: pixelX(5),
    paddingHorizontal: pixelX(10),
  },
  cardTopContentSelected: {
    backgroundColor: '#fff',
  },
  siteBox: {
    flexDirection: 'row',
    width: '100%',
    height: pixelY(110),
  },
  siteLeft: {
    flex: 9,
    flexDirection: 'column',
  },
  siteLeftTop: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
    paddingVertical: pixelX(10),
  },
  tag: {
    color: '#fff',
    backgroundColor: '#62B7F2',
    padding: pixelX(2),
    fontSize: pixelX(12),
    marginRight: pixelX(5),
  },
  siteText: {
    fontSize: pixelX(20),
    color: '#000',
  },
  siteLeftBottom: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
  },
  name: {
    fontSize: pixelX(16),
    color: '#000',
  },
  siteRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: pixelY(50),
    paddingHorizontal: pixelX(10),
    borderTopWidth: pixelX(1),
    borderTopColor: '#ccc',
  },
  timeBoxLeft: {
    fontSize: pixelX(14),
    color: '#000',
  },
  timeBoxRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  time: {
    fontSize: pixelX(14),
    color: '#000',
    marginRight: pixelX(5),
  },
  listBox: {
    marginTop: pixelY(20),
    width: windowW - pixelX(20),
    // height: pixelY(300),
    backgroundColor: '#fff',
    borderRadius: pixelY(5),
    paddingHorizontal: pixelX(10),
    marginHorizontal: pixelX(10),
  },
  shopName: {
    width: '100%',
    height: pixelY(40),
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: pixelX(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopNameText: {
    fontSize: pixelX(18),
    color: '#46799D',
  },
  shopNameRight: {
    fontSize: pixelX(14),
    color: '#fff',
    backgroundColor: '#62B7F2',
    padding: pixelX(5),
    borderRadius: pixelX(5),
  },
  imgItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: pixelY(100),
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: pixelX(1),
  },
  img: {
    width: pixelY(90),
    height: pixelY(90),
  },
  imgItemLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgItemText: {
    fontSize: pixelX(24),
    color: '#333',
  },
  imgItemRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItemRightText: {
    fontSize: pixelX(18),
    color: '#333',
  },
  imgItemRightRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelY(15),
  },
  imgItemRightRowNum: {
    fontSize: pixelX(16),
    color: '#000',
    marginHorizontal: pixelX(10),
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: pixelY(40),
  },
  listItemLeft: {
    color: '#B4B4B4',
    fontSize: pixelX(16),
  },
  listItemRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listItemRightText: {
    color: '#B4B4B4',
    fontSize: pixelX(20),
    marginLeft: pixelX(5),
  },
  listItemRightText2: {
    color: '#8BC1E5',
    fontSize: pixelX(16),
    marginLeft: pixelX(5),
  },
  listItemRightText3: {
    color: '#E37C71',
    fontSize: pixelX(16),
    marginLeft: pixelX(5),
  },
  bottomLine: {
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: pixelX(1),
  },
  ruleLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ruleLeftmg: {
    marginRight: pixelX(5),
  },
  ruleRight: {
    color: '#B4B4B4',
    fontSize: pixelX(24),
    marginLeft: pixelX(5),
  },
  card2: {
    marginTop: pixelY(20),
    width: windowW - pixelX(20),
    backgroundColor: '#fff',
    borderRadius: pixelY(5),
    paddingHorizontal: pixelX(10),
    marginHorizontal: pixelX(10),
  },
  card2Item: {
    flexDirection: 'row',
    width: '100%',
    height: pixelY(40),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card2ItemLeft: {
    color: '#7190A5',
    fontSize: pixelX(16),
  },
  card2ItemRightText: {
    color: '#ccc',
    fontSize: pixelX(16),
    marginLeft: pixelX(5),
  },
  footermg: {
    marginBottom: pixelY(140),
  },
  payBox: {
    position: 'absolute',
    left: 0,
    bottom: isIphoneX ? pixelX(25) : 0,
    width: '100%',
    height: pixelX(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  payContent: {
    width: '90%',
    height: pixelX(50),
    flexDirection: 'row',
    borderRadius: pixelX(25),
    elevation: 4,
    shadowColor: '#3c3c3c',
    shadowOffset: { width: pixelX(0), height: pixelX(4) },
    shadowOpacity: 0.5,
    shadowRadius: pixelX(8),
  },
  payBoxLeft: {
    flex: 3,
    backgroundColor: '#B4CEE5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelX(10),
    borderTopLeftRadius: pixelX(25),
    borderBottomLeftRadius: pixelX(25),
  },
  payBoxLeftText1: {
    color: '#FFF',
    fontSize: pixelX(14),
  },
  payBoxLeftText2: {
    color: '#FFF',
    fontSize: pixelX(18),
  },
  payBoxRight: {
    flex: 1.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: pixelX(25),
    borderBottomRightRadius: pixelX(25),
  },
  payBoxRightText: {
    color: '#466274',
    fontSize: pixelX(18),
  },
});
