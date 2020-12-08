import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  static propTypes = {};

  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  chart = null;

  render() {
    const { style } = this.props;
    const baseUrl =
      Platform.OS === 'ios'
        ? { uri: './antv/index.html' }
        : { uri: 'file:///android_asset/pages/antv/index.html' };
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={ref => {
            this.chart = ref;
          }}
          style={[
            {
              flex: 1,
              backgroundColor: 'green',
            },
            style,
          ]}
          scalesPageToFit={true}
          source={baseUrl}
        />
      </View>
    );
  }
}
