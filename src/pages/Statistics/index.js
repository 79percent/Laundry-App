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
import { windowW } from '../../utils';
import styles from './styles';
import {} from './utils';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <View style={{ width: windowW, height: windowW * 0.618 }}>
        <Antv />
      </View>
    </View>
  );
}
