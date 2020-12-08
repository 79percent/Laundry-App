import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Antv from '../../components/AntV';
import DatePicker from '../../components/DatePicker';
import { windowW } from '../../utils';
import styles from './styles';
import {} from './utils';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.tipBox}>
          <Text style={styles.tip}>温馨提示：本页面数据每五分钟更新一次</Text>
        </View>
        <View style={styles.block1}>
          <View style={styles.datePickerBox}>
            <DatePicker />
          </View>
          <View style={styles.dateSwitchBox} />
          <View style={styles.dataBox} />
        </View>
        <View style={{ width: windowW, height: windowW * 0.618 }}>
          <Antv />
        </View>
      </ScrollView>
    </View>
  );
}
