import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import colors from 'constants/colors';

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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple3,
    height: 53,
    borderRadius: 14,
  },
  button: {
    flex: 0.5,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hasRightBorder: {
    borderRightWidth: 1,
    borderColor: colors.white1,
  },
  title: {
    color: colors.white1,
  },
});
