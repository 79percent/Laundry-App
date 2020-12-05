/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    key: 'a',
    title: '洗衣',
    list: [
      {
        section: {
          type: '大衣外套',
          price: '价格',
          circle: '洗护周期',
        },
        children: [
          {
            type: '风衣',
            price: '59.0元',
            circle: '3 - 4天',
          },
          {
            type: '羽绒服',
            price: '59.0元',
            circle: '3 - 4天',
          },
        ],
      },
      {
        section: {
          type: '上衣',
          price: '价格',
          circle: '洗护周期',
        },
        children: [
          {
            type: '衬衫',
            price: '25.0元',
            circle: '3 - 4天',
          },
          {
            type: 'T恤',
            price: '25.0元',
            circle: '3 - 4天',
          },
        ],
      },
    ],
  },
  {
    key: 'b',
    title: '洗鞋',
    list: [
      {
        section: {
          type: '鞋类',
          price: '价格',
          circle: '洗护周期',
        },
        children: [
          {
            type: '运动鞋',
            price: '35.0元',
            circle: '4 - 5天',
          },
          {
            type: '拖鞋',
            price: '49.0元',
            circle: '4 - 5天',
          },
        ],
      },
      {
        section: {
          type: '靴类',
          price: '价格',
          circle: '洗护周期',
        },
        children: [
          {
            type: '短款绒面靴',
            price: '49.0元',
            circle: '6 - 7天',
          },
        ],
      },
    ],
  },
];
