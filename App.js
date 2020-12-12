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
import MyNewsScreen from './src/pages/MyNews';
import PersonalDataScreen from './src/pages/PersonalData';
import StatisticsScreen from './src/pages/Statistics';
import WalletScreen from './src/pages/Wallet';
import SystemSettingsScreen from './src/pages/SystemSettings';
import FeedbackScreen from './src/pages/Feedback';
import AboutUsScreen from './src/pages/AboutUs';

const Stack = createStackNavigator();

// 未登录时的页面
const authScreens = {
  // 欢迎页面
  Welcome: {
    component: WelcomeScreen,
    options: { headerShown: false },
  },
  // 注册
  Register: {
    component: RegisterScreen,
    options: {
      title: '',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  // 登录
  Login: {
    component: LoginScreen,
    options: {
      title: '',
      headerBackTitle: ' ',
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
  // 首页、订单、我的 Tab切换
  TabNavigator: {
    component: TabNavigator,
    options: { headerShown: false },
  },
  // 城市列表
  CityList: {
    component: CityListScreen,
    options: {
      title: '城市列表',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  // 填写订单
  AddOrder: {
    component: AddOrderScreen,
    options: {
      title: '填写订单',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 服务介绍
  Introduction: {
    component: IntroductionScreen,
    options: {
      title: '服务介绍',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 服务范围
  Range: {
    component: RangeScreen,
    options: {
      title: '服务范围',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 价格中心
  PriceTable: {
    component: PriceTableScreen,
    options: {
      title: '价格中心',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 我的消息
  MyNews: {
    component: MyNewsScreen,
    options: {
      title: '我的消息',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 个人资料
  PersonalData: {
    component: PersonalDataScreen,
    options: {
      title: '个人资料',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 订单统计
  Statistics: {
    component: StatisticsScreen,
    options: {
      title: '订单统计',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 钱包管理
  Wallet: {
    component: WalletScreen,
    options: {
      title: '钱包管理',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 系统设置
  SystemSettings: {
    component: SystemSettingsScreen,
    options: {
      title: '系统设置',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 意见反馈
  Feedback: {
    component: FeedbackScreen,
    options: {
      title: '意见反馈',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#9DC6E0',
      },
      headerTintColor: '#fff',
    },
  },
  // 关于我们
  AboutUs: {
    component: AboutUsScreen,
    options: {
      title: '关于我们',
      headerBackTitle: ' ',
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
