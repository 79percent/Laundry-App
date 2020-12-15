import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { } from './utils';
import { pixelX, windowH, windowW } from '../../utils';

const dataList = [
  {
    key: 'a',
    label: '总计(元)',
    price: '￥285.00',
    text: '较上月增长23%',
  },
  {
    key: 'b',
    label: '平均每单(元)',
    price: '￥35.00',
    text: '共计8单',
  },
];

export default function DataShow() {
  const renderDataList = list => {
    const arr = [];
    list.forEach((item, index) => {
      const { key, label, price, text } = item;
      if (index !== 0) {
        arr.push(<View style={styles.line} key={`line_${index}`} />);
      }
      arr.push(
        <View style={styles.block} key={key}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      );
    });
    return arr;
  };
  return <View style={styles.container}>{renderDataList(dataList)}</View>;
}
