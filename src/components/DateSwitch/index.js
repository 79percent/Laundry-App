import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { list } from './utils';

export default function DateSwitch() {
  const [selectIndex, setSelectIndex] = useState(0);
  const handlePressItem = (index, key) => {
    setSelectIndex(index);
  };
  const renderSwitchList = listArr => {
    const arr = [];
    listArr.forEach((item, index) => {
      if (index !== 0) {
        arr.push(<View style={styles.line} key={`line_${index}`} />);
      }
      arr.push(
        <TouchableOpacity
          key={item.key}
          style={[
            styles.block,
            index === selectIndex ? styles.chossed : styles.notChossed,
          ]}
          onPress={() => handlePressItem(index, item.key)}
        >
          <Text
            style={
              index === selectIndex ? styles.chossedText : styles.notChossedText
            }
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    });
    return arr;
  };
  return <View style={styles.container}>{renderSwitchList(list)}</View>;
}
