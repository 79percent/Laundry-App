import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  Modal,
  Alert,
  Button,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {} from './utils';
import { pixelX, windowH, windowW } from '../../utils';

moment.locale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
    '_'
  ),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MM月DD日',
    LLL: 'YYYY年MM月DD日Ah点mm分',
    LLLL: 'YYYY年MM月DD日ddddAh点mm分',
    l: 'YYYY-M-D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm',
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
      return hour;
    }
    if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    }
    // '中午'
    return hour >= 11 ? hour : hour + 12;
  },
  meridiem(hour, minute, isLower) {
    const hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    }
    if (hm < 900) {
      return '早上';
    }
    if (hm < 1130) {
      return '上午';
    }
    if (hm < 1230) {
      return '中午';
    }
    if (hm < 1800) {
      return '下午';
    }
    return '晚上';
  },
  calendar: {
    sameDay: '[今天]LT',
    nextDay: '[明天]LT',
    nextWeek: '[下]ddddLT',
    lastDay: '[昨天]LT',
    lastWeek: '[上]ddddLT',
    sameElse: 'L',
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal(number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return `${number}日`;
      case 'M':
        return `${number}月`;
      case 'w':
      case 'W':
        return `${number}周`;
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    ss: '%d秒',
    m: '1分钟',
    mm: '%d分钟',
    h: '1小时',
    hh: '%d小时',
    d: '1天',
    dd: '%d天',
    M: '1个月',
    MM: '%d个月',
    y: '1年',
    yy: '%d年',
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
});

const i18nMap = {
  zh: {
    clear: '清除',
    startTime: '开始时间',
    endTime: '结束时间',
    week: ['日', '一', '二', '三', '四', '五', '六'],
    save: '保存',
  },
};

export default function CalendarModal({
  visible,
  onChangeVisible,
  lang = 'zh',
  minDate: '20190101',
  maxDate: '20201231',
}) {
  const i18n = i18nMap[lang];
  const { clear, startTime, endTime, week, save } = i18n;
  const [modalVisible, setModalVisible] = useState(visible);
  const [start, setStart] = useState(moment());
  const [end, setEnd] = useState(moment());
  // backhandle
  const handleRequestClose = () => {
    setModalVisible(!modalVisible);
    onChangeVisible(!modalVisible);
  };
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={handleRequestClose}
    >
      <View style={styles.container}>
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
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.block1ClearText}>{clear}</Text>
          </TouchableOpacity>
        </View>
        {/* 开始时间 & 结束时间 */}
        <View style={styles.block2}>
          <View style={styles.block2Left}>
            <Text style={styles.block2Text1}>{startTime}</Text>
            <Text style={styles.block2Text2}>
              {(start && start.format('ll')) || ''}
            </Text>
            <Text style={styles.block2Text3}>
              {(start && start.format('dddd')) || ''}
            </Text>
          </View>
          <View style={styles.block2Center}>
            <View style={styles.slash} />
          </View>
          <View style={styles.block2Right}>
            <Text style={styles.block2Text1}>{endTime}</Text>
            <Text style={styles.block2Text2}>
              {(end && end.format('ll')) || ''}
            </Text>
            <Text style={styles.block2Text3}>
              {(end && end.format('dddd')) || ''}
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
            <View
              style={{
                width: windowW,
                height: (windowH - StatusBar.currentHeight) * (8 / 13.5),
              }}
            >
              <View style={styles.month}>
                <Text style={styles.monthText}>十二月</Text>
              </View>
              <View style={styles.day}>
                {new Array(30)
                  .fill(0)
                  .map((_, i) => i + 1)
                  .map(item => (
                    <TouchableOpacity
                      key={item}
                      activeOpacity={0.6}
                      style={styles.dayItem}
                    >
                      <Text style={styles.dayItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          </ScrollView>
        </View>
        {/* 保存按钮 */}
        <View style={styles.block5}>
          <TouchableOpacity style={styles.block5Button} activeOpacity={0.6}>
            <Text style={styles.block5ButtonText}>{save}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

CalendarModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeVisible: PropTypes.func.isRequired,
  lang: PropTypes.func,
};

CalendarModal.defaultProps = {
  lang: 'zh',
};
