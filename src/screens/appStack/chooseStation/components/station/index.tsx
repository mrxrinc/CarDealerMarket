import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import {ServiceStationType} from 'constants/types';
import styles from './styles';

type Props = {
  station: ServiceStationType;
  onPress: () => void;
};

export default ({
  station: {name, characteristics, image, price},
  onPress,
}: Props) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={onPress}
    style={styles.mainContainer}>
    <Image style={styles.image} source={{uri: image}} />
    <View style={styles.details}>
      <IranYekan style={styles.title}>{name}</IranYekan>
      <IranYekan style={styles.price}>قیمت: {price}</IranYekan>
      <IranYekan style={styles.desc}>{characteristics.map((c) => c)}</IranYekan>
    </View>
  </TouchableOpacity>
);
