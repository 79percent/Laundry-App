import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/pages/Welcome';
import RegisterScreen from './src/pages/Register';
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';

const Stack = createStackNavigator();

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

const userScreens = {
  Home: {
    // 主页
    component: HomeScreen,
    options: { headerShown: false },
  },
};

const App = props => {
  const { userInfo } = props;
  const { isLoggedIn } = userInfo;
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
