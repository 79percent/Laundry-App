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
import CalendarModal from '../CalendarModal';
import { windowW } from '../../utils';
import styles from './styles';
import {} from './utils';
import calendarIcon from './img/calendar.png';

export default function DatePicker(props) {
  const defaultIcon = calendarIcon;
  const [modalVisible, setModalVisible] = useState(false);
  const changeCalendarVisible = () => {
    setModalVisible(!modalVisible);
  };
  const handleChangeVisible = visible => {
    setModalVisible(visible);
  };
  return (
    <>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.6}
        onPress={changeCalendarVisible}
      >
        <View style={styles.left}>
          <Text style={styles.dateText}>2018年3月</Text>
        </View>
        <View style={styles.right}>
          <Image source={defaultIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <CalendarModal
        visible={modalVisible}
        onChangeVisible={handleChangeVisible}
      />
    </>
  );
}
