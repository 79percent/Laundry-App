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
import { block1List, settingList } from './utils';
import avatar from '../../assets/img/logo.jpg';

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
                activeOpacity={0.6}
                key={item.key}
                style={[
                  styles.block1Item,
                  index === 0 ? null : styles.block1ItemLine,
                ]}
              >
                <Image source={item.icon} style={styles.block1ItemIcon} />
                <Text style={styles.block1ItemText}>{item.label}</Text>
                <Text style={styles.block1ItemValue}>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {settingList.map(section => (
          <View key={section.key} style={styles.section}>
            {section.children.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
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
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerBtn}
            activeOpacity={0.6}
            onPress={onLoginOut}
          >
            <Text style={styles.footerBtnText}>退出登录</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
