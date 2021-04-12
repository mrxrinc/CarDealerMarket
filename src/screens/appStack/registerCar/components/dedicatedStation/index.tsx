import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import {StationType} from 'constants/types';
import styles from './styles';

type Props = {
  station: StationType;
  onPress: () => void;
};

export default ({station: {name, image}, onPress}: Props) => {
  const price = 5000;
  const characteristics = ['hi', 'hid'];
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.mainContainer}
      key={name}
      onPress={onPress}>
      <View>
        <IranYekan style={styles.title}>پارکینگ {name}</IranYekan>
        <IranYekan style={styles.description}>
          {characteristics.map((c) => `-${c}`)}
        </IranYekan>
        <IranYekan style={styles.description}>
          قیمت رزرو:‌ {price} تومان
        </IranYekan>
      </View>
      <Image style={styles.image} source={{uri: image}} />
    </TouchableOpacity>
  );
};
