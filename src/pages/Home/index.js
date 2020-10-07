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
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';

const Screen = ({ navigation, onLoginOut }) => {
  RNLocation.configure({
    distanceFilter: 5.0,
  });

  RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  })
    .then(granted => {
      if (granted) {
        const locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            console.log(3, locations[0]);
            const { longitude, latitude } = locations[0];
            /* Example location returned
          {
            speed: -1,
            longitude: -0.1337,
            latitude: 51.50998,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
            floor: 0
            timestamp: 1446007304457.029,
            fromMockProvider: false
          }
          */
          }
        );
      }
    })
    .then(err => {
      console.log(4, err);
    });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={onLoginOut}
        title="退出登录"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
