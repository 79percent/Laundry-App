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

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground source={bgImg} style={styles.container}>
    <StatusBar hidden={true} />
    <View style={styles.logoBox}>
      <Image source={logo} style={styles.logoImg} />
      <Text style={styles.logoText}>干得快洗衣店</Text>
    </View>
    <View style={styles.btnsBox}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn, styles.btn1]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.btnText}>创建新账号</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn, styles.btn2]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>使用已有账号登录</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

export default WelcomeScreen;
