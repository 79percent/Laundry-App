import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
              iconName = 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'Order':
              iconName = 'list-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'PersonalCenter':
              iconName = 'user-circle-o';
              return <FontAwesome name={iconName} size={size} color={color} />;
            default:
              iconName = 'question';
              return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#61B2FC',
        inactiveTintColor: '#5D5858',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '主页',
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
