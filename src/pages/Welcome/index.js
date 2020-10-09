import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import bgImg from '../../assets/img/bg.jpeg';
import logo from '../../assets/img/logo.jpg';

const WelcomeScreen = ({ navigation }) => {
  const logoText = '欢迎光临 你妈个臭嗨';
  const createText = '创建新账号';
  const loginText = '使用已有账号登录';
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <View style={styles.logoBox}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.logoText}>{logoText}</Text>
      </View>
      <View style={styles.btnsBox}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.btn, styles.btn1]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btnText}>{createText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.btn, styles.btn2]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnText}>{loginText}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
