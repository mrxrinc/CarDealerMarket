import React, {useState} from 'react';
import {View, Modal, StyleSheet, StatusBar} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MainButton from './MainButton';
import Colors from 'constants/colors';
import IranYekan from './IranYekan';
import {TicketDataType} from 'constants/types';
import Ticket from 'components/Ticket';
import CheckIcon from 'assets/check.svg';
import colors from 'constants/colors';

type Props = {
  data: TicketDataType;
  visible: boolean;
  onRequestClose: () => void;
  error?: boolean;
};

export default ({onRequestClose, visible, data, error}: Props) => {
  const [showTicket, _setShowTicket] = useState(false);
  const handleClose = () => {
    if (showTicket) _setShowTicket(false);
    onRequestClose();
  };
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={handleClose}>
      <StatusBar hidden />
      {showTicket ? (
        <Ticket data={data} />
      ) : (
        <View style={[styles.mainContainer, error && styles.errorContainer]}>
          <EvilIcons
            name="close"
            style={styles.closeIcon}
            onPress={handleClose}
          />
          <View style={styles.contentContainer}>
            {error ? <CheckIcon /> : <CheckIcon />}
            <IranYekan fontWeight="Bold" style={styles.title}>
              {error
                ? 'خطا در روند ثبت نام یا پرداخت وجه'
                : 'ثبت نام با موفقیت انجام شد!'}
            </IranYekan>
            <IranYekan fontWeight="Bold" style={styles.title}>
              کد رهگیری: {data.tracking_code}
            </IranYekan>
          </View>
          <MainButton
            onPress={() => _setShowTicket(true)}
            title={error ? 'تلاش دوباره' : 'مشاهده بلیط'}
            style={styles.button}
            titleStyle={styles.buttonTitle}
            fontWeight="Bold"
          />
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.green1,
  },
  closeIcon: {
    color: colors.white1,
    fontSize: 36,
    position: 'absolute',
    top: 25,
    right: 20,
  },
  errorContainer: {
    backgroundColor: Colors.red2,
  },
  title: {
    color: Colors.white1,
    fontSize: 19,
    textAlign: 'center',
    marginTop: 26,
  },
  button: {
    backgroundColor: Colors.white1,
    marginBottom: 20,
    borderRadius: 10,
    width: '85%',
  },
  buttonTitle: {
    color: Colors.purple3,
    fontSize: 19,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
