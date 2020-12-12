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
import { i18nMap, defaultMinDate, defaultMaxDate, getMonthList } from './utils';
import { pixelX, windowH, windowW } from '../../utils';

export default function CalendarModal({
  visible,
  onChangeVisible,
  lang,
  minDate,
  maxDate,
  format,
  onClose,
  onClear,
  onSelect,
  onSave,
  startDate,
  endDate,
}) {
  const i18n = i18nMap[lang];
  const { clear, startTime, endTime, week, save, month, weekdays } = i18n;
  const [modalVisible, setModalVisible] = useState(visible);
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [monthList, setMonthList] = useState([]);
  // backhandle
  const handleRequestClose = () => {
    setModalVisible(!modalVisible);
    onChangeVisible(!modalVisible);
    onClose();
  };
  // 点击保存
  const handleSave = () => {
    Alert.alert('', `${start} , ${end}`);
    onSave(start, end);
  };
  // 点击日历上的日期
  const handlePressDay = d => {
    const date = moment(d);
    const formatDate = date.format('YYYYMMDD');
    let startTime, endTime;
    if (!start) {
      startTime = formatDate;
      endTime = null;
      setStart(formatDate);
    } else if (!end) {
      if (start > formatDate) {
        setEnd(start);
        setStart(formatDate);
        startTime = formatDate;
        endTime = start;
      } else {
        setEnd(formatDate);
        startTime = start;
        endTime = formatDate;
      }
    } else {
      startTime = null;
      endTime = null;
      setStart(null);
      setEnd(null);
    }
    onSelect(startTime, endTime);
  };
  // 点击清除
  const handleClear = () => {
    setStart(null);
    setEnd(null);
    onClear();
  };
  useEffect(() => {
    setModalVisible(visible);
    setStart(startDate);
    setEnd(endDate);
  }, [visible, startDate, endDate]);
  useEffect(() => {
    const monthArr = getMonthList(minDate, maxDate, month);
    setMonthList(monthArr);
  }, []);
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={handleRequestClose}
    >
      <SafeAreaView style={styles.container}>
        {/* 关闭× & 清除 */}
        <View style={styles.block1}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setModalVisible(!modalVisible);
              onChangeVisible(!modalVisible);
            }}
          >
            <AntDesign name="close" size={pixelX(40)} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={handleClear}>
            <Text style={styles.block1ClearText}>{clear}</Text>
          </TouchableOpacity>
        </View>
        {/* 开始时间 & 结束时间 */}
        <View style={styles.block2}>
          <View style={styles.block2Left}>
            <Text style={styles.block2Text1}>{startTime}</Text>
            <Text style={styles.block2Text2}>
              {(start && moment(start).format(format)) || ''}
            </Text>
            <Text style={styles.block2Text3}>
              {(start && weekdays[moment(start).day()]) || ''}
            </Text>
          </View>
          <View style={styles.block2Center}>
            <View style={styles.slash} />
          </View>
          <View style={styles.block2Right}>
            <Text style={styles.block2Text1}>{endTime}</Text>
            <Text style={styles.block2Text2}>
              {(end && moment(end).format(format)) || ''}
            </Text>
            <Text style={styles.block2Text3}>
              {(end && weekdays[moment(end).day()]) || ''}
            </Text>
          </View>
        </View>
        {/* 星期日 一 二 三 四 五  六 */}
        <View style={styles.block3}>
          {week.map(item => (
            <View
              key={item}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff' }}>{item}</Text>
            </View>
          ))}
        </View>
        {/* 月份 */}
        <View style={styles.block4}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {monthList.map((item, index) => {
              const { month, days } = item;
              return (
                <View
                  key={index}
                  style={{
                    width: windowW,
                    height:
                      (windowH - StatusBar.currentHeight) * (7 / (5.5 + 7)),
                  }}
                >
                  <View style={styles.month}>
                    <Text style={styles.monthText}>{month}</Text>
                  </View>
                  <View style={styles.day}>
                    {days.map((item2, index2) => {
                      if (item2 === null) {
                        return <View key={index2} style={styles.dayItem} />;
                      }
                      const { day, date } = item2;
                      let textStyle, otherStyle;
                      if (
                        (date === start && date === end) ||
                        (date === start && !end) ||
                        (date === end && !start)
                      ) {
                        otherStyle = styles.choosedSingle;
                        textStyle = styles.choosedDayItem;
                      } else if (start && end && start < date && date < end) {
                        otherStyle = styles.choosedInner;
                        textStyle = styles.choosedDayItem;
                      } else if (start && end && start === date) {
                        otherStyle = styles.choosedStart;
                        textStyle = styles.choosedDayItem;
                      } else if (start && end && end === date) {
                        otherStyle = styles.choosedEnd;
                        textStyle = styles.choosedDayItem;
                      }
                      return (
                        <TouchableOpacity
                          key={index2}
                          activeOpacity={1}
                          style={[styles.dayItem, otherStyle]}
                          onPress={() => handlePressDay(date)}
                        >
                          <Text style={[styles.dayItemText, textStyle]}>
                            {day}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {/* 保存按钮 */}
        <View style={styles.block5}>
          <TouchableOpacity
            style={styles.block5Button}
            activeOpacity={0.6}
            onPress={handleSave}
          >
            <Text style={styles.block5ButtonText}>{save}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

CalendarModal.propTypes = {
  visible: PropTypes.bool, // 弹窗显示隐藏
  onChangeVisible: PropTypes.func, // 弹窗显示隐藏事件
  onClose: PropTypes.func, // 弹窗关闭事件
  onClear: PropTypes.func, // 清除事件
  onSelect: PropTypes.func, // 日期选择事件
  onSave: PropTypes.func, // 保存事件
  lang: PropTypes.string, // 语言，zh OR en
  minDate: PropTypes.string, // 日历最小日期
  maxDate: PropTypes.string, // 日历最大日期
  startDate: PropTypes.string, // 选中的开始时间
  endDate: PropTypes.string, // 选中的结束时间
  format: PropTypes.string, // 时间显示格式
};

CalendarModal.defaultProps = {
  visible: false,
  onChangeVisible: visible => { },
  onClose: () => { },
  onClear: () => { },
  onSelect: (start, end) => { },
  onSave: (start, end) => { },
  lang: 'zh',
  minDate: defaultMinDate,
  maxDate: defaultMaxDate,
  startDate: null,
  endDate: null,
  format: 'YYYY年MM月DD日',
};
