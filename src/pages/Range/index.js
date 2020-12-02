import React, { Component, useState } from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { pixelX } from '../../utils';
import {} from './utils';
import styles from './styles';

export default function Range(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text>333</Text>
      </ScrollView>
    </View>
  );
}
