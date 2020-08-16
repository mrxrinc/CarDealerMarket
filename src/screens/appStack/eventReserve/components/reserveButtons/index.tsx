import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import IranYekan from 'components/common/IranYekan';

import colors from 'constants/colors';
import styles from './styles';
import {EventType, NavigationType} from 'constants/types';

interface Props {
  event: EventType;
  navigation: NavigationType;
}

export default ({event, navigation: {navigate}}: Props) => (
  <View style={styles.mainContainer}>
    <IranYekan style={styles.title}>رزرو:</IranYekan>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate('RegisterService', event)}>
      <IranYekan style={styles.buttonTitle}>درخواست ارایه خدمت</IranYekan>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.button, styles.middleButton]}
      onPress={() => navigate('BuyParkingTicket', event)}>
      <IranYekan style={styles.buttonTitle}>پارکینگ (بازدیدکنندگان)</IranYekan>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate('RegisterCar', event)}>
      <IranYekan style={styles.buttonTitle}>جایگاه فروش خودرو</IranYekan>
    </TouchableOpacity>
  </View>
);
