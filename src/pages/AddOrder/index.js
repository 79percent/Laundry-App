import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function AddOrder() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.3, 1]}
      colors={['#ccc', '#fff']}
      style={styles.linearGradient}
    >
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  );
}
