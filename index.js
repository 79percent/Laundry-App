import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import { name as appName } from './app.json';

class RootApp extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => RootApp);
