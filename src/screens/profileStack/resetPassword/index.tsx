import React from 'react';
import {Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styles from './styles';

interface Props {
  navigation: NavigationStackProp;
}

export default ({navigation}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.screenTitle}>reset password</Text>
    </View>
  );
};
