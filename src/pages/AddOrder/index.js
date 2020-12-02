import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { pixelY } from '../../utils';
import xiyi from '../../assets/img/xiyi.jpg';

export default function AddOrder() {
  const [cardIndex, setCatdIndex] = useState(0);
  const handlePressCardTop = index => {
    setCatdIndex(index);
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      colors={['#ccc', '#F5F5F5']}
      style={styles.linearGradient}
    >
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.card1}>
            {/* 选择项 */}
            <View style={styles.card1TopSelect}>
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  styles.card1TopSelect1,
                  cardIndex === 0 ? null : styles.cardTopNoSelected,
                ]}
                onPress={() => handlePressCardTop(0)}
              >
                <View
                  style={[
                    styles.card1TopSelect1Content,
                    cardIndex === 0 ? styles.cardTopContentSelected : null,
                  ]}
                >
                  <Text
                    style={
                      cardIndex === 0
                        ? styles.card1TopSelect1ContentTextSelect
                        : styles.card1TopSelect1ContentTextNoSelect
                    }
                  >
                    上门取件
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={[
                  styles.card1TopSelect1,
                  cardIndex === 1 ? null : styles.cardTopNoSelected,
                ]}
                onPress={() => handlePressCardTop(1)}
              >
                <View
                  style={[
                    styles.card1TopSelect2Content,
                    cardIndex === 1 ? styles.cardTopContentSelected : null,
                  ]}
                >
                  <Text
                    style={
                      cardIndex === 1
                        ? styles.card1TopSelect1ContentTextSelect
                        : styles.card1TopSelect1ContentTextNoSelect
                    }
                  >
                    到店取送
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* 地址 */}
            <View
              style={[
                styles.card1SiteSelect,
                cardIndex === 1
                  ? styles.card1SiteSelectLeft
                  : styles.card1SiteSelectRight,
              ]}
            >
              <View style={styles.siteBox}>
                <View style={styles.siteLeft}>
                  <View style={styles.siteLeftTop}>
                    <Text style={styles.tag}>学校</Text>
                    <Text style={styles.siteText}>
                      杭州市江干区下沙街道美达晓城天地
                    </Text>
                  </View>
                  <View style={styles.siteLeftBottom}>
                    <Text style={styles.name}>葛（先生） 19817802786</Text>
                  </View>
                </View>
                <View style={styles.siteRight}>
                  <AntDesign name="right" size={pixelY(20)} color="#696f7a" />
                </View>
              </View>
              {/* 时间 */}
              <View style={styles.timeBox}>
                <Text style={styles.timeBoxLeft}>立即取件</Text>
                <View style={styles.timeBoxRight}>
                  <Text style={styles.time}>约16:15到达</Text>
                  <AntDesign name="right" size={pixelY(16)} color="#696f7a" />
                </View>
              </View>
            </View>
          </View>
          {/* 店名 件数 */}
          <View style={styles.listBox}>
            <View style={styles.shopName}>
              <Text style={styles.shopNameText}>杭州下沙店</Text>
              <Text style={styles.shopNameRight}>店长专送</Text>
            </View>
            <View style={styles.imgItem}>
              <View style={styles.imgItemLeft}>
                <Image source={xiyi} style={styles.img} />
                <Text style={styles.imgItemText}>洗衣</Text>
              </View>
              <View style={styles.imgItemRight}>
                <Text style={styles.imgItemRightText}>件数</Text>
                <View style={styles.imgItemRightRow}>
                  <AntDesign
                    name="minussquareo"
                    size={pixelY(26)}
                    color="#696f7a"
                  />
                  <Text style={styles.imgItemRightRowNum}>2</Text>
                  <AntDesign
                    name="plussquareo"
                    size={pixelY(26)}
                    color="#696f7a"
                  />
                </View>
              </View>
            </View>
            <View style={[styles.listItem, styles.bottomLine]}>
              <Text style={styles.listItemLeft}>服务费</Text>
              <View style={styles.listItemRight}>
                <FontAwesome name="rmb" size={pixelY(16)} color="#B4B4B4" />
                <Text style={styles.listItemRightText}>3</Text>
              </View>
            </View>
            <View style={[styles.listItem]}>
              <Text style={styles.listItemLeft}>优惠券</Text>
              <View style={styles.listItemRight}>
                <Text style={styles.listItemRightText2}>一张可用</Text>
                <AntDesign name="right" size={pixelY(16)} color="#8BC1E5" />
              </View>
            </View>
            <View style={[styles.listItem, styles.bottomLine]}>
              <Text style={styles.listItemLeft}>红包</Text>
              <View style={styles.listItemRight}>
                <Text style={styles.listItemRightText3}>暂无可用</Text>
                <AntDesign name="right" size={pixelY(16)} color="#E37C71" />
              </View>
            </View>
            <View style={[styles.listItem]}>
              <View style={styles.ruleLeft}>
                <Text style={[styles.listItemLeft, styles.ruleLeftmg]}>
                  优惠规则
                </Text>
                <AntDesign
                  name="questioncircleo"
                  size={pixelY(14)}
                  color="#ccc"
                />
              </View>
              <View style={styles.listItemRight}>
                <FontAwesome name="rmb" size={pixelY(20)} color="#B4B4B4" />
                <Text style={styles.ruleRight}>19</Text>
              </View>
            </View>
          </View>
          <View style={[styles.card2, styles.footermg]}>
            <View style={styles.card2Item}>
              <Text style={styles.card2ItemLeft}>备注</Text>
              <View style={styles.listItemRight}>
                <Text style={styles.card2ItemRightText}>干洗、烘干等要求</Text>
                <AntDesign name="right" size={pixelY(16)} color="#B4B4B4" />
              </View>
            </View>
            <View style={styles.card2Item}>
              <Text style={styles.card2ItemLeft}>发票</Text>
              <View style={styles.listItemRight}>
                <Text style={styles.card2ItemRightText}>发票</Text>
                <AntDesign name="right" size={pixelY(16)} color="#B4B4B4" />
              </View>
            </View>
            <View style={styles.card2Item}>
              <Text style={styles.card2ItemLeft}>支付方式</Text>
              <View style={styles.listItemRight}>
                <Text style={styles.card2ItemRightText}>在线支付</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.payBox}>
        <View style={styles.payBoxLeft}>
          <Text style={styles.payBoxLeftText1}>已优惠￥5</Text>
          <Text style={styles.payBoxLeftText2}>合计￥18</Text>
        </View>
        <View style={styles.payBoxRight}>
          <Text style={styles.payBoxRightText}>去支付</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
