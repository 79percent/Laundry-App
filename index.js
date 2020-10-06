import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
