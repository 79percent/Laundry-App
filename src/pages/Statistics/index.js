import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import Antv from '../../components/AntV';
import DatePicker from '../../components/DatePicker';
import DateSwitch from '../../components/DateSwitch';
import DataShow from '../../components/DataShow';
import { windowW } from '../../utils';
import styles from './styles';
import {
  defaultData,
  defaultCircleData1,
  defaultCircleData2,
  totalMoney,
  lineChartParams,
  circleChartParams1,
  circleChartParams2,
  getUpdateParams,
  footerDataArr,
} from './utils';

export default function Statistics() {
  const [data, setData] = useState([...defaultData]);
  const [circleData1, setCircleData1] = useState(defaultCircleData1);
  const [circleData2, setCircleData2] = useState(defaultCircleData2);
  const updateParams1 = getUpdateParams(circleData1[0].y);
  const updateParams2 = getUpdateParams(circleData2[0].y);
  useEffect(() => {
    const timer = setInterval(() => {
      const newData = [];
      for (let i = 1; i <= 31; i++) {
        newData.push({
          day: i,
          value: Math.round(Math.random() * 100),
        });
      }
      const num = Math.round(Math.random() * 100);
      const newCircle1 = [
        {
          x: '1',
          y: num,
        },
      ];
      const newCircle2 = [
        {
          x: '1',
          y: 100 - num,
        },
      ];
      setCircleData1(newCircle1);
      setCircleData2(newCircle2);
      setData(newData);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.tipBox}>
          <Text style={styles.tip}>温馨提示：本页面数据每五分钟更新一次</Text>
        </View>
        <View style={styles.block1}>
          <View style={styles.datePickerBox}>
            <DatePicker />
          </View>
          <View style={styles.dateSwitchBox}>
            <DateSwitch />
          </View>
          <View style={styles.dataBox}>
            <DataShow />
          </View>
        </View>
        <View style={styles.chartBox}>
          <Antv chartParams={lineChartParams} data={data} />
        </View>
        <View style={styles.payWayBox}>
          <View style={styles.parWayTextBox}>
            <Text style={styles.parWayText}>支付方式占比</Text>
          </View>
          <View style={styles.circleCharts}>
            <View style={styles.circleChartItem}>
              <Antv
                chartParams={circleChartParams1}
                data={circleData1}
                updateParams={updateParams1}
              />
              <View style={styles.circleChartItemLabel}>
                <Text style={styles.circleChartItemLabelText1}>支付宝</Text>
              </View>
            </View>
            <View style={styles.circleChartItem}>
              <Antv
                chartParams={circleChartParams2}
                data={circleData2}
                updateParams={updateParams2}
              />
              <View style={styles.circleChartItemLabel}>
                <Text style={styles.circleChartItemLabelText2}>微信</Text>
              </View>
            </View>
          </View>
          <View style={styles.itemDataBox}>
            {footerDataArr.map((item, index) => {
              const { key, children } = item;
              return (
                <View
                  key={key}
                  style={[
                    styles.itemDataBoxItem,
                    index !== 0 ? styles.itemDataBoxItemLine : null
                  ]}
                >
                  {children.map((item2, index2) => {
                    const { key: key2, label, value } = item2;
                    return (
                      <View key={key2} style={styles.itemDataBoxItemRow}>
                        <Text style={styles.itemRowLabel}>{label}</Text>
                        <Text style={styles.itemRowLabel}>{value}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
