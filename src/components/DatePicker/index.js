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
import Calendar from '../CalendarSelect';
import { windowW } from '../../utils';
import styles from './styles';
import {} from './utils';
import calendarIcon from './img/calendar.png';

export default function DatePicker(props) {
  const defaultIcon = calendarIcon;
  let calendar;
  const customI18n = {
    w: ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    weekday: [
      '',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    text: {
      start: 'Check in',
      end: 'Check out',
      date: 'Date',
      save: 'Confirm',
      clear: 'Reset',
    },
    date: 'DD / MM', // date format
  };
  // optional property, too.
  const color = {
    subColor: '#f0f0f0',
  };
  const [startDate, setStartDate] = useState(new Date(2020, 11, 12));
  const [endDate, setEndDate] = useState(new Date(2020, 12, 8));
  const confirmDate = ({ startDate, endDate, startMoment, endMoment }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const openCalendar = () => {
    calendar && calendar.open();
  };
  return (
    <>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.6}
        onPress={openCalendar}
      >
        <View style={styles.left}>
          <Text style={styles.dateText}>2018年3月</Text>
        </View>
        <View style={styles.right}>
          <Image source={defaultIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Calendar
        i18n="zh"
        ref={ref => {
          calendar = ref;
        }}
        // customI18n={customI18n}
        color={color}
        format="YYYYMMDD"
        minDate="20170510"
        maxDate="20180312"
        startDate={startDate}
        endDate={endDate}
        onConfirm={confirmDate}
      />
    </>
  );
}
