import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import baiduMapHtml from './baiduMap.html';

export default class BaiduMap extends Component {
  webViewRef = null;

  render() {
    const baseUrl =
      Platform.OS === 'ios'
        ? baiduMapHtml
        // ? { uri: './baiduMap.html' }
        : { uri: 'file:///android_asset/pages/baiduMap/index.html' };
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
