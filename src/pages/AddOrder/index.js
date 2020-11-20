import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function AddOrder() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.7, 1]}
      colors={['#ccc', '#fff']}
      style={styles.linearGradient}
    >
      <View style={styles.card1}>
        <View style={styles.card1TopSelect}>
          <View style={styles.card1TopSelect1}>
            <View style={styles.card1TopSelect1Content}>
              <Text style={styles.card1TopSelect1ContentText}>上门取件</Text>
            </View>
          </View>
          <View style={styles.card1TopSelect2}>
            <View style={styles.card1TopSelect2Content}>
              <Text style={styles.card1TopSelect2ContentText}>自取送</Text>
            </View>
          </View>
        </View>
        <View style={styles.card1SiteSelect} />
      </View>
    </LinearGradient>
  );
}
