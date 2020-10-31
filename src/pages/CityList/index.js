import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import cityIndex from './cityData';
import styles from './styles';
import { CONTENT_LIST_INDEX, CONTENT_LIST_TAG } from './utils';
import { setStorage } from '../../utils';

export default class CityList extends React.Component {
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
  handlePressCity = cityItem => {
    const { name } = cityItem;
    setStorage({
      key: 'city',
      value: name,
    }).then(() => {
      const { navigation } = this.props;
      navigation.goBack();
    });
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.contentListIndex}>
        {/* 吸顶首字母*/}
        <Text style={styles.contentListIndexText}>{section.sortLetters}</Text>
      </View>
    );
  };

  renderItem = ({ item, section }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.handlePressCity(item);
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

  render = () => {
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
  };
}
