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
import { signIn } from '../../redux/modules/userInfo/action';

const Screen = props => {
  const { onSignIn } = props;
  const [nickName, setNickName] = useState(''); // 昵称
  const [mobile, setMobile] = useState(''); // 手机号
  const [password, setPassword] = useState(''); // 密码
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Text style={styles.title}>创建新账号</Text>
      <View style={[styles.rowItem, styles.itemborderBottom]}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemLeftLabel}>昵称</Text>
        </View>
        <View style={styles.itemRight}>
          <TextInput
            value={nickName}
            onChangeText={value => setNickName(value)}
            maxLength={15}
            placeholder="例如：玛玛哈哈"
            style={styles.itemRightInput}
          />
        </View>
      </View>
      <View style={styles.rowItem}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemLeftLabel}>国家/地区</Text>
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.itemRightLabel}>中国大陆（+86）</Text>
        </View>
      </View>
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
          onSignIn({
            nickName,
            mobile,
            password,
          });
        }}
      >
        <Text style={styles.registerBtnText}>注册</Text>
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
    onSignIn: params => {
      const action = signIn(params);
      dispatch(action);
    },
  };
};

const RegisterScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default RegisterScreen;
