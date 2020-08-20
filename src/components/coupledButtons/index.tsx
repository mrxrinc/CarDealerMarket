import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';

type Props = {
  buttons: Array<{title: string; onPress: () => void; style?: object}>;
  additionalStyles?: object;
};

export default ({buttons, additionalStyles}: Props) => (
  <View style={[styles.mainContainer, additionalStyles]}>
    {buttons.map(({title, onPress, style}, i) => (
      <TouchableOpacity
        key={title}
        onPress={onPress}
        activeOpacity={0.4}
        style={[
          styles.button,
          i < buttons.length && styles.hasRightBorder,
          style,
        ]}>
        <IranYekan fontWeight="Bold" style={styles.title}>
          {title}
        </IranYekan>
      </TouchableOpacity>
    ))}
  </View>
);
