import React, { Component, useState } from 'react';
import { View, Text, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import BaiduMap from '../../components/BaiduMap';
import { pixelX } from '../../utils';
import { rangeText } from './utils';
import styles from './styles';
import car from '../../assets/img/car.png';

export default function Range(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <View style={styles.carBox}>
        <Image source={car} style={styles.car} />
      </View>
      <View style={styles.blockBox}>
        <View style={styles.block}>
          <Text style={styles.blockText}>服务范围说明</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.rangeText}>
          &emsp;&emsp;
          {rangeText}
        </Text>
      </View>
      <View style={styles.mapBox}>
        <BaiduMap />
      </View>
    </SafeAreaView>
  );
}
