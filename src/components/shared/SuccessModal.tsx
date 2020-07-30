import React, {useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainButton from './MainButton';
import Colors from 'constants/colors';
import IranYekan from './IranYekan';
import {TicketDataType} from 'constants/types';
import Ticket from 'components/Ticket';

type Props = {
  data: TicketDataType;
  visible: boolean;
  onRequestClose: () => void;
  error?: boolean;
};

export default ({onRequestClose, visible, data, error}: Props) => {
  const [showTicket, _setShowTicket] = useState(false);
  const _onRequestClose = () => {
    if (showTicket) _setShowTicket(false);
    onRequestClose();
  };
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={_onRequestClose}>
      {showTicket ? (
        <Ticket data={data} />
      ) : (
        <View style={[styles.mainContainer, error && styles.errorContainer]}>
          <View style={styles.block} />
          <View style={styles.block}>
            <View style={styles.iconContainer}>
              {error ? (
                <Ionicons name="ios-close" size={110} color={Colors.red2} />
              ) : (
                <MaterialCommunityIcons
                  name={'check'}
                  size={82}
                  color={Colors.green1}
                />
              )}
            </View>
            <IranYekan style={styles.title}>
              {error
                ? 'خطا در روند ثبت نام یا پرداخت وجه'
                : 'ثبت نام با موفقیت انجام شد!'}
            </IranYekan>
            <IranYekan style={[styles.title, styles.title2]}>
              کد رهگیری: {data.tracking_code}
            </IranYekan>
          </View>
          <View style={[styles.block, styles.buttonsContainer]}>
            <MainButton
              onPress={() => _setShowTicket(true)}
              title={error ? 'تلاش دوباره' : 'دانلود بلیط'}
              style={styles.button}
              titleStyle={styles.buttonTitle}
            />
            <MainButton
              onPress={onRequestClose}
              title="بستن"
              style={[styles.button, styles.button2]}
              titleStyle={styles.buttonTitle}
            />
          </View>
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
  errorContainer: {
    backgroundColor: Colors.red2,
  },
  iconContainer: {
    backgroundColor: Colors.white1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    width: 95,
    height: 95,
    borderRadius: 190,
    alignSelf: 'center',
  },
  title: {
    color: Colors.white1,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 26,
  },
  title2: {
    marginTop: 12,
  },
  button: {
    backgroundColor: Colors.white1,
    marginBottom: 15,
    elevation: 8,
    borderRadius: 10,
    height: 45,
  },
  button2: {
    marginBottom: 20,
  },
  buttonTitle: {
    color: Colors.blue2,
    fontSize: 15,
  },
  block: {
    flex: 1,
  },
  buttonsContainer: {
    width: '85%',
    justifyContent: 'flex-end',
  },
});
