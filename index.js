import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';

class RootApp extends React.Component {
  componentDidMount() {
    // 隐藏启动图
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => RootApp);
