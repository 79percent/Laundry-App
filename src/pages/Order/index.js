import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
  SectionList,
  Image,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Toast } from 'react-native-gui';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { DATA } from './utils';
import { pixelX, pixelY, wait } from '../../utils';

const { DURATION } = Toast;

const renderItem = ({ item, index, separators }) => {
  const { status, type = {}, total, totalPrice, isComment, id, time } = item;
  const { label, img, num } = type;
  return (
    <View style={styles.itemBox}>
      <View style={styles.itemContent}>
        <View style={styles.itemTop}>
          <View style={styles.itemTopLeft}>
            <Ionicons name="time" size={pixelX(18)} color="#FFBB8E" />
            <Text style={styles.itemTopLeftOrder}>{time}</Text>
          </View>
          <Text t={true} style={styles.itemTopRightTime}>
            {status}
          </Text>
        </View>
        <View style={styles.itemCenter}>
          <View style={styles.itemCenterLeft}>
            <Image source={img} style={styles.itemCenterLeftImg} />
            <Text style={styles.itemCenterLeftLabel}>{label}</Text>
          </View>
          <Text style={styles.itemCenterRightText}>{`共${total}件`}</Text>
        </View>
        <View style={styles.itemBottom}>
          <View style={styles.itemBottomLeft}>
            <Text style={styles.itemBottomLeftText1}>总价：</Text>
            <FontAwesome name="rmb" size={pixelX(16)} color="#D36767" />
            <Text style={styles.itemBottomLeftText2}>{totalPrice}</Text>
          </View>
          <View style={styles.itemBottomRight}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.itemBottomRightAgain}
            >
              <Text style={styles.itemBottomRightText}>再来一单</Text>
            </TouchableOpacity>
            {isComment ? null : (
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.itemBottomRightComment}
              >
                <Text style={styles.itemBottomRightText}>去评价</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

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

const ListFooterComponent = ({ animating, isNoMore }) => {
  return isNoMore ? (
    <ActivityIndicator
      style={{ height: pixelY(60) }}
      animating={animating}
      size="small"
      color="#007ACC"
    />
  ) : (
      <View
        style={{
          height: pixelY(60),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#000', fontSize: pixelX(14) }}>没有更多了</Text>
      </View>
    );
};

export default function OrderScreen() {
  const [refreshing, setRefreshing] = useState(false); // 下拉刷新状态
  const [loading, setLoading] = useState(false); // 上拉刷新状态
  const [page, setPage] = useState(0); // 当前页码
  const [totalPage, setTotalPage] = useState(0); // 总共页数
  const [dataList, setDataList] = useState([]); // 数据列表
  useEffect(() => {
    // 页面完成加载时，获取数据
    wait(500).then(() => {
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
    wait(500).then(() => setRefreshing(false));
  }, []);
  // 滚动到底部
  const onEndReached = () => {
    if (page < totalPage) {
      setLoading(true);
      wait(500).then(() => {
        const newPage = page + 1;
        setPage(newPage);
        setDataList([...dataList, ...DATA]);
        setLoading(false);
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <HeaderComponent />
      <FlatList
        style={{ flex: 1, backgroundColor: '#EAEAEA', }}
        data={dataList}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={<ListEmptyComponent />}
        ListFooterComponent={
          <ListFooterComponent
            animating={loading}
            isNoMore={page === 0 || page < totalPage}
          />
        }
      />
    </SafeAreaView>
  );
}
