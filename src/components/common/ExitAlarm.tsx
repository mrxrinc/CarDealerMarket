import React from 'react';
import {View, StyleSheet} from 'react-native';

import MainButton from './MainButton';
import InstantModal from './InstantModal';
import IranYekan from './IranYekan';
import colors from 'constants/colors';

const NUMBERIC_REGEX = /^(\s*|\d+)$/;
type Props = {
  visible: boolean;
  onExit: () => void;
  onRequestClose: () => void;
};

export default ({visible, onExit, onRequestClose}: Props) => {
  return (
    <InstantModal
      visible={visible}
      onRequestClose={onRequestClose}
      height={240}>
      <View style={styles.mainContainer}>
        <IranYekan style={styles.title}>
          آیا مایل به خروج از حساب کاربری خود هستید؟
        </IranYekan>
        <MainButton title="خروج" style={styles.button} onPress={onExit} />
      </View>
    </InstantModal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.red2,
    marginTop: 28,
    height: 55,
  },
});
