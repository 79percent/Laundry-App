import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Text style={styles.title}>注册新账号</Text>
      <View style={[styles.rowItem, styles.itemborderBottom]}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemLeftLabel}>昵称</Text>
        </View>
        <View style={styles.itemRight}>
          <TextInput
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
            secureTextEntry={true}
            placeholder="填写密码"
            style={styles.itemRightInput}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>注册</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
