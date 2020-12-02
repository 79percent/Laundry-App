import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import styles from './styles';
import { queryLoaction } from '../../services';
import { pixelY, pixelX, getStorage, setStorage } from '../../utils';
import { bannerArr, typesArr, serviceArr, commentsList } from './utils';
import footerImg from '../../assets/img/footerImg.jpg';
import { onSaveHome } from '../../redux/modules/home/action';

const Screen = ({ navigation, home, onSave }) => {
  const [location, setLocation] = useState(''); // 地理位置
  // 获取城市
  const getCity = () => {
    getStorage('city')
      .then(res => {
        if (res !== null) {
          setLocation(res);
        } else {
          // 获取当前所在位置
          Geolocation.getCurrentPosition(
            info => {
              const { coords } = info;
              const { latitude, longitude } = coords;
              queryLoaction([latitude, longitude])
                .then(result => {
                  const { addressComponent } = result;
                  const { province, city, district } = addressComponent; // 省 市 区
                  const cityName = `${city}${district}`;
                  setStorage({
                    key: 'city',
                    value: cityName,
                  }).then(() => {
                    setLocation(`${city}${district}`);
                  });
                })
                .catch(error => {
                  console.log(error);
                });
            },
            error => {
              console.log(error);
            },
            {
              maximumAge: 1000 * 60 * 10,
            }
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCity();
    });
    return unsubscribe;
  }, []);
  const navigatePage = route => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* 所在城市 */}
      <View style={styles.block1}>
        <TouchableOpacity
          style={styles.block1Touch}
          onPress={() => navigatePage('CityList')}
        >
          <Entypo name="location" size={pixelY(16)} color="#696f7a" />
          <Text style={styles.locationText}>{location || '选择城市'}</Text>
          <FontAwesome name="angle-down" size={pixelY(26)} color="#696f7a" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* 轮播图 */}
        <View style={styles.block2}>
          <Swiper autoplay={true}>
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
              onPress={() => navigatePage('AddOrder')}
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
              onPress={() => navigatePage(item.id)}
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
        {/* 评论 */}
        <ImageBackground source={footerImg} style={styles.block6}>
          <View style={styles.block6SwiperBox}>
            <Swiper
              horizontal={false}
              autoplay={true}
              autoplayTimeout={4}
              showsPagination={false}
            >
              {commentsList.map(item => (
                <View style={styles.block6SwiperBoxItem} key={item.id}>
                  <View style={styles.block6SwiperBoxItemTop}>
                    <Text style={styles.block6SwiperBoxItemTopText}>
                      {`${item.city} ${item.phone}`}
                    </Text>
                  </View>
                  <View style={styles.block6SwiperBoxItemBottom}>
                    <View style={styles.block6SwiperBoxItemBottomLeft}>
                      <FontAwesome
                        name="quote-left"
                        size={pixelX(16)}
                        color="#95989B"
                      />
                    </View>
                    <View style={styles.block6SwiperBoxItemBottomCenter}>
                      <Text style={styles.block6SwiperBoxItemBottomText}>
                        {item.comment}
                      </Text>
                    </View>
                    <View style={styles.block6SwiperBoxItemBottomRight}>
                      <FontAwesome
                        name="quote-right"
                        size={pixelX(18)}
                        color="#95989B"
                      />
                    </View>
                  </View>
                </View>
              ))}
            </Swiper>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: obj => {
      dispatch(onSaveHome(obj));
    },
  };
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default HomeScreen;
