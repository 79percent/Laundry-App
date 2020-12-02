/**
 * 服务介绍
 */
import React, { Component, useState } from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { pixelX } from '../../utils';
import { data } from './utils';
import styles from './styles';

export default function Introduction(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="#9DC6E0"
        barStyle="light-content"
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => {
          const { title, content, img, ratio } = item;
          return (
            <View style={styles.section} key={index}>
              <Text style={styles.sectionTitle}>{title}</Text>
              {content.map((text, index2) => (
                <Text
                  key={index2}
                  style={[
                    styles.sectionContentText,
                    index2 < content.length - 1 ? styles.mgbt : null,
                  ]}
                >
                  &emsp;&emsp;
                  {text}
                </Text>
              ))}
              {img ? (
                <View style={styles.sectionContentImgBox}>
                  <Image
                    source={img}
                    style={{ width: pixelX(300), height: pixelX(300) / ratio }}
                  />
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
