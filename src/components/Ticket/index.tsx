import React from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import QRCode from 'react-native-qrcode-svg';
import CameraRoll from '@react-native-community/cameraroll';
import ViewShot from 'react-native-view-shot';
import {TicketDataType} from 'constants/types';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {numberWithCommas} from 'utils/helpers';
import moment from 'moment-jalaali';
import MainButton from 'components/common/MainButton';

interface Props {
  data: TicketDataType;
}

export default ({
  data: {
    tracking_code = '653289472',
    first_name = 'رضا',
    last_name = 'شجاع',
    ticket_type = 'dedicated_station',
    marketplace = 'بازار مرکزی',
    price = 20000,
    date = Date.now(),
  },
}: Props) => {
  const onCapture = async (uri: string) => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      ToastAndroid.show(
        'ذخیره ی فایل بدلیل عدم اجازه لغو شد.',
        ToastAndroid.LONG,
      );
      return;
    }
    await CameraRoll.save(uri);
    ToastAndroid.show('بلیط در گالری ذخیره شد.', ToastAndroid.LONG);
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };
  const renderTicketType = (type: string) => {
    switch (type) {
      case 'dedicated_station':
        return 'جایگاه فروش ویژه';
      case 'normal_station':
        return 'جایگاه فروش عادی';
      case 'locating_service':
        return 'جایگاه ارایه خدمت';
      case 'visitor_parking':
        return 'پارکینگ بازدیدکننده';
    }
  };
  return (
    <ViewShot
      style={styles.mainContainer}
      onCapture={onCapture}
      captureMode="mount">
      <EvilIcons name="close" style={styles.closeIcon} />
      <View style={styles.ticketContainer}>
        <View style={styles.top}>
          <View style={styles.barcodeContainer}>
            <QRCode value={tracking_code} size={280} />
          </View>
          <IranYekan style={[styles.title, styles.trackingCode]}>
            {tracking_code}
          </IranYekan>
        </View>
        <View style={styles.middleView}>
          <View style={styles.borderContainer}>
            <View style={[styles.borderCircle, styles.borderCircleLeft]} />
            <View style={styles.middleBorder} />
            <View style={[styles.borderCircle, styles.borderCircleRight]} />
          </View>
        </View>
        <View style={styles.bottom}>
          <IranYekan
            style={[styles.title, styles.bottomTitle]}
            fontWeight="Light">
            بلیط ورودی بازار خودرو
          </IranYekan>
          <IranYekan fontWeight="Light" style={styles.desc}>
            {marketplace} - {renderTicketType(ticket_type)}
          </IranYekan>
          <IranYekan style={styles.title} fontWeight="Bold">
            {first_name} {last_name}
          </IranYekan>
          <IranYekan fontWeight="Bold" style={[styles.numbers, styles.price]}>
            {numberWithCommas(price)}
          </IranYekan>
          <IranYekan style={styles.toman}>تومان</IranYekan>
        </View>
        <View style={styles.dateContainer}>
          <IranYekan fontWeight="Bold" style={styles.numbers}>
            {moment(date).format('jYY/jM/jD')}
          </IranYekan>
          <IranYekan>تاریخ رویداد:</IranYekan>
        </View>
        <Text style={styles.dorhatoUrl}>dorhato.com</Text>
      </View>
      <MainButton
        title="ذخیره"
        onPress={() => {}}
        style={styles.saveButton}
        titleStyle={styles.saveButtonTitle}
        fontWeight="Bold"
      />
    </ViewShot>
  );
};
