import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: any;
  fontWeight?: 'Bold' | 'Regular' | 'Light';
  style?: any;
  numberOfLines?: number;
  onPress?: () => void | Promise<void>;
}

export default (props: Props) => {
  const customStyle = Array.isArray(props.style)
    ? props.style.map((style) => {
        if (style) {
          return style;
        }
      })
    : props.style;
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: `iy${props.fontWeight ? props.fontWeight : 'Regular'}`,
          fontSize: 15,
        },
        customStyle,
      ]}>
      {props.children}
    </Text>
  );
};
