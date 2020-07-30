import React from 'react';
import Modal, {SlideAnimation} from 'react-native-modals';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {View, StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'constants/layout';
import colors from 'constants/colors';

interface Props {
  children: any;
  onRequestClose: () => void;
  visible: boolean;
}

export default ({visible, children, onRequestClose}: Props) => (
  <Modal
    visible={visible}
    onTouchOutside={onRequestClose}
    swipeDirection={'down'}
    modalAnimation={
      new SlideAnimation({
        slideFrom: 'bottom',
      })
    }
    overlayOpacity={0.5}
    rounded={false}
    modalStyle={styles.modalStyle}
    onSwipeOut={onRequestClose}>
    <View style={styles.headerContainer}>
      <EvilIcons name="close" size={37} color={colors.grey2} />
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
    alignItems: 'flex-end',
    paddingRight: 15,
  },
});
