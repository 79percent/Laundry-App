import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   title: 'Login',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
