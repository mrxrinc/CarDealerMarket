import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'constants/layout';
import colors from 'constants/colors';
import IranYekan from './IranYekan';

interface Props {
  children: any;
  onRequestClose: () => void;
  visible: boolean;
  title?: string;
  onBackPress?: () => void;
  height?: number;
}

export default ({
  visible,
  children,
  onRequestClose,
  onBackPress,
  title,
  height,
}: Props) => (
  <Modal
    isVisible={visible}
    onBackdropPress={onRequestClose}
    backdropOpacity={0.5}
    style={[
      styles.modalStyle,
      height ? {height, marginTop: DEVICE_HEIGHT - height} : {},
    ]}>
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={[styles.headerIconContainer, styles.closeIconContainer]}>
        <EvilIcons name="close" size={35} onPress={onRequestClose} />
      </TouchableOpacity>
      <IranYekan style={styles.title}>{title}</IranYekan>
      {onBackPress && (
        <TouchableOpacity
          style={[styles.headerIconContainer, styles.backIconContainer]}>
          <SimpleLineIcons name="arrow-left" size={21} onPress={onBackPress} />
        </TouchableOpacity>
      )}
    </View>
    {children}
  </Modal>
);

const styles = StyleSheet.create({
  modalStyle: {
    height: DEVICE_HEIGHT * 0.8,
    width: DEVICE_WIDTH,
    marginTop: DEVICE_HEIGHT * 0.2,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: colors.white1,
  },
  headerContainer: {
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    position: 'relative',
  },
  title: {fontSize: 17},
  headerIconContainer: {
    position: 'absolute',
    top: 0,
    width: 60,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconContainer: {
    right: 0,
  },
  backIconContainer: {
    left: 0,
  },
});
