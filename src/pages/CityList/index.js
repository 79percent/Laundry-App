/* eslint-disable react/state-in-constructor */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { queryLoaction } from '../../services';
import cityIndex from './cityData';
import styles from './styles';
import { CONTENT_LIST_INDEX, CONTENT_LIST_TAG } from './utils';
import { setStorage } from '../../utils';

export default class CityList extends React.Component {
  state = {
    currentCity: '',
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      info => {
        const { coords } = info;
        const { latitude, longitude } = coords;
        queryLoaction([latitude, longitude])
          .then(result => {
            const { addressComponent } = result;
            const { province, city, district } = addressComponent; // 省 市 区
            const cityName = `${city}${district}`;
            this.setState({
              currentCity: cityName,
            });
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      },
      {
        maximumAge: 1000 * 60 * 10,
      }
    );
  }

  refSectionList = null;

  // 滚动至index位置
  scrollTo = index => {
    this.refSectionList.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      // 补偿高度偏移
      // viewOffset: CONTENT_LIST_TAG * 4,
      viewOffset: 0,
    });
  };

  // 点击城市
  handlePressCity = name => {
    setStorage({
      key: 'city',
      value: name,
    }).then(() => {
      const { navigation } = this.props;
      navigation.goBack();
    });
  };

  // 吸顶首字母
  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.contentListIndex}>
        <Text style={styles.contentListIndexText}>{section.sortLetters}</Text>
      </View>
    );
  };

  // 城市名
  renderItem = ({ item, section }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.handlePressCity(item.name);
        }}
      >
        <View style={styles.contentListTag}>
          <Text style={styles.contentListTagText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // 右侧列表
  renderRightIndex = () => {
    return cityIndex.map((item, index) => {
      return (
        <TouchableOpacity
          key={item.sortLetters}
          onPress={() => {
            this.scrollTo(index);
          }}
        >
          <View style={styles.indexBox}>
            <Text style={styles.indexText}>{item.sortLetters}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  // 渲染当前地区
  renderListHeaderComponent = () => {
    const { currentCity } = this.state;
    return (
      <View>
        <View style={styles.contentListIndex}>
          <Text style={styles.contentListIndexText}>当前地区</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.handlePressCity(currentCity);
          }}
        >
          <View style={styles.currentCity}>
            <Text style={styles.currentCityText}>{currentCity}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          {/* 城市列表 */}
          <View style={styles.contentContainer}>
            <View style={styles.contentList}>
              <SectionList
                ref={ref => {
                  this.refSectionList = ref;
                }}
                ListHeaderComponent={this.renderListHeaderComponent}
                stickySectionHeadersEnabled={true} // 吸顶
                sections={cityIndex}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => `${index}`}
                getItemLayout={(data, index) => {
                  return {
                    index,
                    // 偏移高度 = 每一个城市(CONTENT_LIST_TAG)x数量+字母高度(CONTENT_LIST_INDEX)
                    offset: CONTENT_LIST_TAG * index + CONTENT_LIST_INDEX,
                    length: CONTENT_LIST_TAG,
                  };
                }}
              />
            </View>
          </View>
          {/* 右边索引 */}
          <View style={styles.rightIndex}>{this.renderRightIndex()}</View>
        </View>
      </View>
    );
  }
}
