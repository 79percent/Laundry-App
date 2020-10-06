import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { loginIn } from '../../redux/modules/userInfo/action';

const Screen = ({ navigation, onLoginIn }) => {
  const [mobile, setMobile] = useState(''); // 手机号
  const [password, setPassword] = useState(''); // 密码
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Text style={styles.title}>手机号登录</Text>
      <View style={[styles.rowItem, styles.itemborderBottom]}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemLeftLabel}>手机号</Text>
        </View>
        <View style={styles.itemRight}>
          <TextInput
            value={mobile}
            onChangeText={value => setMobile(value)}
            keyboardType="numeric"
            clearButtonMode="while-editing"
            placeholder="请填写手机号"
            style={styles.itemRightInput}
          />
        </View>
      </View>
      <View style={[styles.rowItem, styles.itemborderBottom]}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemLeftLabel}>密码</Text>
        </View>
        <View style={styles.itemRight}>
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
            placeholder="填写密码"
            style={styles.itemRightInput}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.registerBtn}
        onPress={() => {
          onLoginIn({
            mobile,
            password,
          });
        }}
      >
        <Text style={styles.registerBtnText}>登录</Text>
      </TouchableOpacity>
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
    onLoginIn: params => {
      const action = loginIn(params);
      dispatch(action);
    },
  };
};

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default LoginScreen;
