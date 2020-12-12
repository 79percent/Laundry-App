import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import antvHtml from './antv/index.html';

export default class App extends Component {
  chart = null;

  render() {
    const { style } = this.props;
    const baseUrl =
      Platform.OS === 'ios'
        ? antvHtml
        // ? { uri: './antv/index.html' }
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
            },
            style,
          ]}
          // scalesPageToFit={true}
          source={baseUrl}
        />
      </View>
    );
  }
}
