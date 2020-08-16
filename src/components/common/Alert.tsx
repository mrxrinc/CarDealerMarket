import React from 'react';
import * as Animatable from 'react-native-animatable';
import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH} from 'constants/layout';
import colors from 'constants/colors';
import IranYekan from './IranYekan';

interface Props {
  title: string;
  success?: boolean;
  visible: boolean;
}

export default ({visible, success, title}: Props) => (
  <Animatable.View
    easing="ease-in-out"
    duration={500}
    transition="top"
    style={[
      styles.mainContainer,
      visible && styles.visible,
      success && styles.success,
    ]}>
    <IranYekan style={styles.title}>{title}</IranYekan>
  </Animatable.View>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: -87,
    height: 87,
    width: DEVICE_WIDTH,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.red3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    top: 0,
  },
  success: {
    backgroundColor: colors.green1,
  },
  title: {
    color: colors.white1,
    fontSize: 17,
  },
});
