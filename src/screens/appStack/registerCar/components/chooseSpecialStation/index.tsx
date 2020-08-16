import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import {StationType} from 'constants/types';
import styles from './styles';

type Props = {
  station: StationType;
  onPress: () => void;
};

export default ({station: {name, price, image}, onPress}: Props) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.mainContainer}>
    <View style={styles.disabledButton}>
      <IranYekan style={styles.disabledButtonTitle}>
        انتخاب جایگاه ویژه
      </IranYekan>
    </View>
    <View style={styles.station}>
      <View>
        <IranYekan>پارکینگ شماره {name}</IranYekan>
        <IranYekan style={styles.stationDescription}>
          قیمت رزرو:‌ {price} تومان
        </IranYekan>
      </View>
      <Image style={styles.stationImage} source={{uri: image}} />
    </View>
  </TouchableOpacity>
);
1;
