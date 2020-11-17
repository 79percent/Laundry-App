import yue from '../../assets/img/yue.png';
import hongbao from '../../assets/img/hongbao.png';
import youhuiquan from '../../assets/img/youhuiquan.png';
import jifen from '../../assets/img/jifen.png';

export const block1List = [
  {
    key: 'a',
    label: '余额',
    icon: yue,
    value: '￥6.30',
  },
  {
    key: 'b',
    label: '红包',
    icon: hongbao,
    value: '2个',
  },
  {
    key: 'c',
    label: '优惠券',
    icon: youhuiquan,
    value: '1张',
  },
  {
    key: 'd',
    label: '积分',
    icon: jifen,
    value: '70',
  },
];

export const settingList = [
  {
    key: 's1',
    children: [
      {
        key: 'wdxx',
        label: '我的消息',
        icon: 'mail', // AntDesign
      },
      {
        key: 'grzl',
        label: '个人资料',
        icon: 'contacts', // AntDesign
      },
    ],
  },
  {
    key: 's5',
    children: [
      {
        key: 'ddtj',
        label: '订单统计',
        icon: 'linechart', // AntDesign
      },
    ],
  },
  {
    key: 's2',
    children: [
      {
        key: 'yhkgl',
        label: '钱包管理',
        icon: 'wallet', // AntDesign
      },
    ],
  },
  {
    key: 's3',
    children: [
      {
        key: 'xtsz',
        label: '系统设置',
        icon: 'setting', // AntDesign
      },
      {
        key: 'yjfk',
        label: '意见反馈',
        icon: 'message1', // AntDesign
      },
    ],
  },
  {
    key: 's4',
    children: [
      {
        key: 'gywm',
        label: '关于我们',
        icon: 'exclamationcircleo', // AntDesign
      },
    ],
  },
];
