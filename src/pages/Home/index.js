import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import RNLocation from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';
import { queryLoaction } from '../../services';

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
  return (
    <View style={styles.container}>
      <View style={styles.block1}>
        <Text>{location || '选择城市'}</Text>
      </View>
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
