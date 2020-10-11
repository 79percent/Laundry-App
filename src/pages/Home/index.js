import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';
import { queryLoaction } from '../../services';
import { pixelY } from '../../utils';
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';
import xiyi from '../../assets/img/xiyi.jpg';
import xixie from '../../assets/img/xixie.jpg';
import xijiafang from '../../assets/img/xijiafang.jpg';
import chuanglian from '../../assets/img/chuanglian.jpg';

const Screen = ({ navigation, onLoginOut }) => {
  const [location, setLocation] = useState(''); // 存储地理位置
  // 获取当前所在位置
  Geolocation.getCurrentPosition(
    info => {
      const { coords } = info;
      const { latitude, longitude } = coords;
      queryLoaction([latitude, longitude])
        .then(result => {
          const { addressComponent } = result;
          const { province, city, district } = addressComponent; // 省 市 区
          setLocation(`${city}${district}`);
        })
        .catch(error => {
          console.log(error);
        });
    },
    err => console.log(err),
    {
      maximumAge: 1000 * 60 * 10,
    }
  );
  const bannerArr = [
    {
      id: 'banner1',
      img: banner1,
    },
    {
      id: 'banner2',
      img: banner2,
    },
    {
      id: 'banner3',
      img: banner3,
    },
  ];
  const typesArr = [
    {
      id: 'xiyi',
      label: '洗衣',
      img: xiyi,
    },
    {
      id: 'xixie',
      label: '洗鞋',
      img: xixie,
    },
    {
      id: 'xijiafang',
      label: '洗家纺',
      img: xijiafang,
    },
    {
      id: 'chuanglian',
      label: '窗帘清洗',
      img: chuanglian,
    },
  ];
  const serviceArr = [
    {
      id: 'fuwujieshao',
      label: '服务介绍',
      iconName: 'ios-albums',
      iconType: 'Ionicons',
    },
    {
      id: 'fuwufanwei',
      label: '服务范围',
      iconName: 'globe',
      iconType: 'FontAwesome',
    },
    {
      id: 'jiagebiao',
      label: '价格表',
      iconName: 'ios-menu-outline',
      iconType: 'Ionicons',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* 所在城市 */}
      <View style={styles.block1}>
        <Text style={styles.locationText}>{location || '选择城市'}</Text>
      </View>
      <ScrollView>
        {/* 轮播图 */}
        <View style={styles.block2}>
          <Swiper>
            {bannerArr.map(item => (
              <View style={styles.slide} key={item.id}>
                <Image source={item.img} style={styles.banner} />
              </View>
            ))}
          </Swiper>
        </View>
        {/* 专业清洗 */}
        <View style={styles.block3}>
          <Text style={styles.block3Text}>— 专业清洗 —</Text>
        </View>
        {/* 洗衣、洗鞋、洗家纺、窗帘清洗 */}
        <View style={styles.block4}>
          {typesArr.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.block4Item}
              activeOpacity={0.6}
            >
              <Text style={styles.block4ItemLabel}>{item.label}</Text>
              <Image style={styles.block4ItemImg} source={item.img} />
            </TouchableOpacity>
          ))}
        </View>
        {/* 服务介绍、服务范围、价目中心 */}
        <View style={styles.block5}>
          {serviceArr.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.block4Item}
              activeOpacity={0.6}
            >
              {item.iconType === 'Ionicons' ? (
                <Ionicons
                  name={item.iconName}
                  size={pixelY(26)}
                  color="#696f7a"
                />
              ) : (
                <FontAwesome
                  name={item.iconName}
                  size={pixelY(26)}
                  color="#696f7a"
                />
              )}
              <Text style={styles.block5ItemLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
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
