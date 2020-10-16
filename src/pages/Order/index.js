import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
  SectionList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { pixelX, pixelY, wait } from '../../utils';

const DATA = [
  {
    title: '2020年10月16日',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: '2020年10月17日',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: '2020年10月18日',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: '2020年10月19日',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HeaderComponent = () => (
  <View
    style={{
      width: '100%',
      height: pixelY(50),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: '#333', fontSize: pixelX(16) }}>所有订单</Text>
  </View>
);

const ListEmptyComponent = () => (
  <View
    style={{
      flex: 1,
      height: pixelY(400),
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'orange', fontSize: pixelX(20) }}>快去下单吧！</Text>
  </View>
);

const ListFooterComponent = ({ animating }) => (
  <ActivityIndicator
    style={{ height: pixelY(40) }}
    animating={animating}
    size="small"
    color="#007ACC"
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default function OrderScreen() {
  const [refreshing, setRefreshing] = useState(false); // 下拉刷新状态
  const [loading, setLoading] = useState(false); // 上拉刷新状态
  const [page, setPage] = useState(0); // 当前页码
  const [totalPage, setTotalPage] = useState(0); // 总共页数
  const [dataList, setDataList] = useState([]); // 数据列表
  let toast = null; // toast ref
  useEffect(() => {
    // 页面完成加载时，获取数据
    wait(1000).then(() => {
      setPage(1);
      setTotalPage(3);
      setDataList([...DATA]);
    });
  }, []);
  // 刷新
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setTotalPage(3);
    setDataList([...DATA]);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  // 滚动到底部
  const onEndReached = () => {
    if (page < totalPage) {
      setLoading(true);
      wait(1000).then(() => {
        const newPage = page + 1;
        setPage(newPage);
        setDataList([...dataList, ...DATA]);
        setLoading(false);
      });
    } else {
      toast && toast.show('没有更多了！', DURATION.LENGTH_LONG);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <SectionList
        sections={dataList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={<ListEmptyComponent />}
        ListFooterComponent={<ListFooterComponent animating={loading} />}
        showsVerticalScrollIndicator={false}
      />
      <Toast
        ref={ref => {
          toast = ref;
        }}
        style={{ backgroundColor: '#000' }}
        position="center"
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: '#fff' }}
      />
    </SafeAreaView>
  );
}
