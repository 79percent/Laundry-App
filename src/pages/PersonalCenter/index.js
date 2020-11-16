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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';
import { clearStorage, pixelY } from '../../utils';
import avatar from '../../assets/img/logo.jpg';

const block1List = [
  {
    key: 'a',
    label: '全部订单',
    icon: 'file-text', // Feather
  },
  {
    key: 'b',
    label: '待付款',
    icon: 'clock', // Feather
  },
  {
    key: 'c',
    label: '待确认',
    icon: 'calendar', // Feather
  },
  {
    key: 'd',
    label: '已完成',
    icon: 'check-circle', // Feather
  },
];

const settingList = [
  {
    key: 's1',
    children: [
      {
        key: 'wdxx',
        label: '我的消息',
        icon: 'mail', // AntDesign
      },
      {
        key: 'grzl',
        label: '个人资料',
        icon: 'contacts', // AntDesign
      },
    ],
  },
  {
    key: 's2',
    children: [
      {
        key: 'yhkgl',
        label: '银行卡管理',
        icon: 'wallet', // AntDesign
      },
    ],
  },
  {
    key: 's3',
    children: [
      {
        key: 'xtsz',
        label: '系统设置',
        icon: 'setting', // AntDesign
      },
      {
        key: 'yjfk',
        label: '意见反馈',
        icon: 'message1', // AntDesign
      },
    ],
  },
  {
    key: 's4',
    children: [
      {
        key: 'gywm',
        label: '关于我们',
        icon: 'exclamationcircleo', // AntDesign
      },
    ],
  },
];

const Screen = ({ navigation, onLoginOut }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.block}>
          <View style={styles.avatarBox}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.userName}>用户名</Text>
            <View style={styles.vip}>
              <Text style={styles.vipText}>会员V</Text>
            </View>
          </View>
          <View style={styles.block1}>
            {block1List.map((item, index) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.block1Item,
                  index === 0 ? null : styles.block1ItemLine,
                ]}
              >
                <Feather name={item.icon} size={pixelY(26)} color="#E3B971" />
                <Text style={styles.block1ItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {settingList.map(section => (
          <View key={section.key} style={styles.section}>
            {section.children.map((item, index) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.sectionItem,
                  index === 0
                    ? styles.sectionItemTopradius
                    : styles.sectionItemLine,
                  index === section.children.length - 1
                    ? styles.sectionItemBottomradius
                    : null,
                ]}
              >
                <View style={styles.sectionItemLeft}>
                  <AntDesign
                    name={item.icon}
                    size={pixelY(18)}
                    color="#E3B971"
                  />
                  <Text style={styles.sectionItemLeftLabel}>{item.label}</Text>
                </View>
                <AntDesign name="right" size={pixelY(18)} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      {/* <Button
        onPress={onLoginOut}
        title="退出登录"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={{ marginBottom: 20 }} />
      <Button
        onPress={clearStorage}
        title="清除缓存"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginOut: () => {
      const action = loginOut();
      dispatch(action);
    },
  };
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default HomeScreen;
