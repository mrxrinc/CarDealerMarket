// @flow
import React from 'react';
import {View} from 'react-native';

type Props = {
  color?: string;
  height?: number;
  width?: string;
};
export default ({color = '#eee', height = 1, width = '100%'}: Props) => (
  <View style={{alignSelf: 'center', backgroundColor: color, height, width}} />
);
