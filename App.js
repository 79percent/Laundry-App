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
import TabNavigator from './src/pages/TabNavigator';
import CityListScreen from './src/pages/CityList';
import AddOrderScreen from './src/pages/AddOrder';
import IntroductionScreen from './src/pages/Introduction';
import RangeScreen from './src/pages/Range';
import PriceTableScreen from './src/pages/PriceTable';

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
  TabNavigator: {
    // 首页、订单、我的 Tab切换
    component: TabNavigator,
    options: { headerShown: false },
  },
  CityList: {
    // 城市列表
    component: CityListScreen,
    options: {
      title: '城市列表',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  AddOrder: {
    // 填写订单
    component: AddOrderScreen,
    options: {
      title: '填写订单',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  Introduction: {
    // 服务介绍
    component: IntroductionScreen,
    options: {
      title: '服务介绍',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  Range: {
    // 服务范围
    component: RangeScreen,
    options: {
      title: '服务范围',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  PriceTable: {
    // 价格中心
    component: PriceTableScreen,
    options: {
      title: '价格中心',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
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
          setTimeout(() => {
            SplashScreen.hide();
          }, 500);
        } else {
          SplashScreen.hide();
        }
      })
      .catch(err => {
        setTimeout(() => {
          SplashScreen.hide();
        }, 500);
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
