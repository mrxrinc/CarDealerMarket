import React from 'react';
import {Text} from 'react-native';
import {FontWeight} from 'constants/types';

interface Props {
  children: any;
  fontWeight?: FontWeight;
  style?: any;
  numberOfLines?: number;
  onPress?: () => void | Promise<void>;
}

export default ({style, fontWeight, children, ...props}: Props) => {
  const customStyle = Array.isArray(style) ? style : [style];
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: `iy${fontWeight ? fontWeight : 'Regular'}`,
          fontSize: 15,
        },
        ...customStyle,
      ]}>
      {children}
    </Text>
  );
};
