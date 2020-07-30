import React from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import QRCode from 'react-native-qrcode-svg';
import CameraRoll from '@react-native-community/cameraroll';
import ViewShot from 'react-native-view-shot';
import {TicketDataType} from 'constants/types';
import styles from './styles';

interface Props {
  data: TicketDataType;
}

export default ({
  data: {tracking_code, first_name, last_name, ticket_type, marketplace},
}: Props) => {
  const onCapture = async (uri: string) => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      ToastAndroid.show(
        'ذخیره ی فایل بدلیل عدم اجازه لغو شد.',
        ToastAndroid.LONG,
      );
      return;
    }
    const res = await CameraRoll.save(uri);
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
      <View style={styles.ticketContainer}>
        <View style={styles.absoluteContainer}>
          <View style={styles.borderContainer}>
            <View style={[styles.borderCircle, styles.borderCircleLeft]} />
            {Array.from({length: 25}).map((_, v) => (
              <View key={v} style={styles.dash} />
            ))}
            <View style={[styles.borderCircle, styles.borderCircleRight]} />
          </View>
        </View>
        <View style={styles.top}>
          <IranYekan fontWeight="Bold" style={styles.title}>
            بلیط ورودی بازار خودرو
          </IranYekan>
          <IranYekan style={styles.desc}>
            {marketplace} - {renderTicketType(ticket_type)}
          </IranYekan>
          <IranYekan style={styles.desc}>
            {last_name + ' - ' + first_name + ' - ' + tracking_code}
          </IranYekan>
          <Text style={styles.desc}>WWW.DORHATO.COM</Text>
        </View>
        <View style={styles.bottom}>
          <QRCode value={tracking_code} size={180} />
          <View style={styles.barcodeDetails}>
            <Text style={styles.barcodeNumTitle}>NUM :</Text>
            <Text style={styles.barcodeNum}>178</Text>
            <Text style={styles.barcodeDesc}>P12 - 17820</Text>
            <Text style={styles.barcodeDesc}>BAZAR - D</Text>
            <Text style={styles.barcodeDesc}>7755707</Text>
          </View>
        </View>
      </View>
    </ViewShot>
  );
};
