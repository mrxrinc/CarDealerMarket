import React from 'react';
import Modal, {SlideAnimation} from 'react-native-modals';
import {View} from 'react-native';
import styles from './styles';

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
    overlayOpacity={0.9}
    rounded={false}
    modalStyle={styles.modalStyle}
    onSwipeOut={onRequestClose}>
    <View style={styles.backScreen} />
    {children}
  </Modal>
);
