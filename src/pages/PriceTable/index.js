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
    <View
      style={[
        {
          flex: 1,
          backgroundColor: '#EAEAEA',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View>
          {data.map(item => {
            const { section, children } = item;
            const { type, price, circle } = section;
            return (
              <View key={type}>
                {/* 表头 */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'skyblue',
                  }}
                >
                  <Text>{type}</Text>
                  <Text>{price}</Text>
                  <Text>{circle}</Text>
                </View>
                {/* 表内容 */}
                <View>
                  {children.map(child => {
                    const { type, price, circle } = child;
                    return (
                      <View
                        key={type}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Text>{type}</Text>
                        <Text>{price}</Text>
                        <Text>{circle}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const initialLayout = { width: windowW };

export default function TabViewExample() {
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
        style={{ flex: 1 }}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled={true}
            bounces={true}
            style={{ backgroundColor: '#fff' }}
            activeColor="#9DC6E0"
            inactiveColor="#000"
            indicatorStyle={{ backgroundColor: '#9DC6E0' }}
            indicatorContainerStyle={{}}
            tabStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: pixelX(20),
              width: 'auto',
            }}
          />
        )}
      />
    </View>
  );
}
