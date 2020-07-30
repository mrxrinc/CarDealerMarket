import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.mainContainer}>
    <Text style={styles.title}>Comming Soon...</Text>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
});
