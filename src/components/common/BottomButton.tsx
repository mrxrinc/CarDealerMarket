import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import Colors from 'constants/colors';

interface Props {
  onPress: () => void;
  title: string;
  style?: object;
}

export const BOTTOM_BUTTON_HEIGHT = 63;
export default ({onPress, style, title}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[styles.mainContainer, style]}>
    <IranYekan style={styles.title}>{title}</IranYekan>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: BOTTOM_BUTTON_HEIGHT,
    backgroundColor: Colors.yellow1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white1,
    fontSize: 20,
  },
});
