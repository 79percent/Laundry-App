import React, { Component, useState } from 'react';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import {} from '../../utils';
import { html, injectJSText, injectedJSText } from './utils';
import styles from './styles';
import htmlFile from './index.html';

export default class BaiduMap extends Component {
  webViewRef = null;

  render() {
    const baseUrl =
      Platform.OS === 'ios'
        ? { uri: './index.html' }
        : { uri: 'file:///android_asset/pages/index.html' };
    return (
      <View style={styles.container}>
        <WebView
          ref={ref => {
            this.webViewRef = ref;
          }}
          source={baseUrl}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
