import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { pixelX, pixelY, windowW } from '../../utils';
import styles from './styles';
import { routes } from './utils';

const RoutePage = ({ data }) => {
  return (
    <View style={[styles.routePage]}>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => {
          const { section, children } = item;
          const { type, price, circle } = section;
          return (
            <View key={index} style={styles.tableContent}>
              <View style={styles.table}>
                {/* 表头 */}
                <View style={styles.tableHeader}>
                  <View style={styles.tableHeaderType}>
                    <Text style={styles.tableHeaderText}>{type}</Text>
                  </View>
                  <View style={styles.tableHeaderPrice}>
                    <Text style={styles.tableHeaderText}>{price}</Text>
                  </View>
                  <View style={styles.tableHeaderCircle}>
                    <Text style={styles.tableHeaderText}>{circle}</Text>
                  </View>
                </View>
                {/* 表内容 */}
                {children.map((child, index2) => {
                  const { type, price, circle } = child;
                  return (
                    <View
                      key={index2}
                      style={[
                        styles.tableRow,
                        index2 === 0 ? null : styles.tableRowTopLine,
                      ]}
                    >
                      <View style={styles.tableRowType}>
                        <Text style={styles.tableRowText}>{type}</Text>
                      </View>
                      <View style={styles.tableRowPrice}>
                        <Text style={styles.tableRowText}>{price}</Text>
                      </View>
                      <View style={styles.tableRowCircle}>
                        <Text style={styles.tableRowText}>{circle}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const initialLayout = { width: windowW };

export default function PriceTable() {
  const [index, setIndex] = React.useState(0);
  const renderScene = ({ route, jumpTo }) => {
    const { key, title, list } = route;
    return <RoutePage data={list} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        // lazy={true}
        // renderLazyPlaceholder={() => (
        //   <Text style={{ color: 'red' }}>loading...</Text>
        // )}
        style={styles.tabView}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled={true}
            bounces={true}
            style={styles.tabBar}
            activeColor="#9DC6E0"
            inactiveColor="#000"
            indicatorStyle={styles.indicatorStyle}
            indicatorContainerStyle={{}}
            tabStyle={styles.tabStyle}
          />
        )}
      />
    </View>
  );
}
