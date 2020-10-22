import xiyi from '../../assets/img/xiyi.jpg';
import xixie from '../../assets/img/xixie.jpg';
import xijiafang from '../../assets/img/xijiafang.jpg';
import chuanglian from '../../assets/img/chuanglian.jpg';

/* eslint-disable import/prefer-default-export */
export const DATA = [
  {
    id: '17714643450',
    time: '2020/10/23 14:25:21',
    status: '待上门',
    type: {
      typeId: 'xiyi',
      label: '洗衣',
      img: xiyi,
      num: 2,
      allPrice: 20,
    },
    total: 2,
    totalPrice: 20,
    isComment: false,
  },
  {
    id: '14459238911',
    time: '2020/10/20 10:11:05',
    status: '已完成',
    type: {
      typeId: 'xixie',
      label: '洗鞋',
      img: xixie,
      num: 2,
      allPrice: 50,
    },
    total: 3,
    totalPrice: 50,
    isComment: true,
  },
  {
    id: '15345486698',
    time: '2020/10/15 08:21:32',
    status: '已取消',
    type: {
      typeId: 'xijiafang',
      label: '洗家纺',
      img: xijiafang,
      num: 1,
      allPrice: 30,
    },
    total: 1,
    totalPrice: 30,
    isComment: false,
  },
  {
    id: '11751043602',
    time: '2020/10/05 19:54:55',
    status: '已完成',
    type: {
      typeId: 'chuanglian',
      label: '窗帘清洗',
      img: chuanglian,
      num: 1,
      allPrice: 50,
    },
    total: 1,
    totalPrice: 50,
    isComment: false,
  },
];
