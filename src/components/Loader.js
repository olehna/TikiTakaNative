import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Loader = () => (
  <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
    <View style={styles.center}>
      <ActivityIndicator size="large" color={'#fff'} />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
