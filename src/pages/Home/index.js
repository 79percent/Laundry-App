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
import Swiper from 'react-native-swiper';
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';
import { queryLoaction } from '../../services';
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
  const serviceArr = [
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
  return (
    <View style={styles.container}>
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
          <Text style={styles.block3Text}>- 专业清洗 -</Text>
        </View>
        {/* 洗衣、洗鞋、洗家纺、窗帘清洗 */}
        <View style={styles.block4}>
          {serviceArr.map(item => (
            <View key={item.id} style={styles.block4Item}>
              <Text style={styles.block4ItemLabel}>{item.label}</Text>
              <Image style={styles.block4ItemImg} source={item.img} />
            </View>
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
