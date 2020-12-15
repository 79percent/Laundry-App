import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import antvHtml from './antv/index.html';
import { toString } from '../../utils';
import { defaultJavaScriptString } from './utils';

export default class AntV extends Component {
  chart = null;

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    const { data: prevData } = prevProps;
    if (JSON.stringify(data) !== JSON.stringify(prevData)) {
      this.renderChart(false);
    }
  }

  getJavaScriptString = isFirst => {
    const {
      chartParams = defaultJavaScriptString,
      data = [],
      updateParams = '',
    } = this.props;
    if (isFirst) {
      return chartParams;
    }
    return `
        chart.changeData(${toString(data)});
        ${updateParams}
      `;
  };

  renderChart = isFirst => {
    this.chart &&
      this.chart.injectJavaScript(this.getJavaScriptString(isFirst));
  };

  handleLoad = () => {
    this.renderChart(true);
  };

  static toString = toString;

  render() {
    const baseUrl =
      Platform.OS === 'ios'
        ? antvHtml
        : // ? { uri: './antv/index.html' }
        { uri: 'file:///android_asset/pages/antv/index.html' };
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
          ]}
          scalesPageToFit={true}
          source={baseUrl}
          bounces={false}
          geolocationEnabled={true}
          javaScriptEnabled={true}
          onLoad={this.handleLoad}
        />
      </View>
    );
  }
}

AntV.propTypes = {
  chartParams: PropTypes.string, // 加载AntV图表的代码
  data: PropTypes.any, // 图表数据
  updateParams: PropTypes.string, // 更新图表脚本
};

AntV.defaultProps = {
  chartParams: defaultJavaScriptString,
  data: [],
  updateParams: '',
};
