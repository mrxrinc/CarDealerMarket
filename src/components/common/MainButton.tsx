// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IranYekan from './IranYekan';
import Colors from 'constants/colors';
import {FontWeight} from 'constants/types';

type Props = {
  title: string;
  onPress: () => void;
  style?: object;
  titleStyle?: object;
  fontWeight?: FontWeight;
};

export default ({title, onPress, style, titleStyle, fontWeight}: Props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.button, style]}>
    <IranYekan fontWeight={fontWeight} style={[styles.title, titleStyle]}>
      {title}
    </IranYekan>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 52,
    borderRadius: 10,
  },
  title: {
    color: Colors.white1,
    fontSize: 18,
  },
});
