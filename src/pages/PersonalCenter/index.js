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
import styles from './styles';
import { loginOut } from '../../redux/modules/userInfo/action';

const Screen = ({ navigation, onLoginOut }) => {
  return (
    <View style={styles.container}>
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
