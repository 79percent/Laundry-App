import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { pixelY, pixelX } from '../../utils';
import HomeScreen from '../Home';
import OrderScreen from '../Order';
import PersonalCenter from '../PersonalCenter';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Order':
              iconName = 'bars';
              break;
            case 'PersonalCenter':
              iconName = 'user';
              break;
            default:
              iconName = 'question';
              break;
          }
          return <AntDesign name={iconName} size={pixelX(26)} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#61B2FC',
        inactiveTintColor: '#5D5858',
        style: {
          height: pixelY(65),
        },
        tabStyle: {},
        labelStyle: {
          fontSize: pixelY(14),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          title: '订单',
        }}
      />
      <Tab.Screen
        name="PersonalCenter"
        component={PersonalCenter}
        options={{
          title: '我的',
        }}
      />
    </Tab.Navigator>
  );
}
