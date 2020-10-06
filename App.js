import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { getStorage } from './src/utils';
import { saveUserInfo } from './src/redux/modules/userInfo/action';
import WelcomeScreen from './src/pages/Welcome';
import RegisterScreen from './src/pages/Register';
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';

const Stack = createStackNavigator();

// 未登录时的页面
const authScreens = {
  Welcome: {
    // 欢迎页面
    component: WelcomeScreen,
    options: { headerShown: false },
  },
  Register: {
    // 注册
    component: RegisterScreen,
    options: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  Login: {
    // 登录
    component: LoginScreen,
    options: {
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
};

// 已登录时的页面
const userScreens = {
  Home: {
    // 主页
    component: HomeScreen,
    options: { headerShown: false },
  },
};

const App = props => {
  const { userInfo, dispatch } = props;
  const { isLoggedIn } = userInfo;
  useEffect(() => {
    // 如果本地存储中有user，则已经登录过
    getStorage('user')
      .then(res => {
        if (res !== null) {
          const action = saveUserInfo({
            ...res,
            isLoggedIn: true,
          });
          dispatch(action);
        }
        SplashScreen.hide();
      })
      .catch(err => {
        console.log(err);
        SplashScreen.hide();
      });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries({
          ...(isLoggedIn ? userScreens : authScreens), // 判断是否登录
        }).map(([key, value]) => {
          const { component, options } = value;
          return (
            <Stack.Screen
              key={key}
              name={key}
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, null)(App);
