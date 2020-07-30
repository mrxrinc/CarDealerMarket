import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationStackProp} from 'react-navigation-stack';
import colors from 'constants/colors';

type Props = {
  navigation: NavigationStackProp;
};

export default ({navigation: {navigate}}: Props) => {
  useEffect(() => {
    (async () => {
      const jwt = await AsyncStorage.getItem('jwt');
      navigate(!jwt ? 'App' : 'Auth');
    })();
  }, []);
  return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
};

const styles = StyleSheet.create({
  loadingIndicator: {
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
  },
});
