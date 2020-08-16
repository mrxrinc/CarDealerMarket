import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';

export type Item = {
  title: string;
  desc: string;
  image: string;
};

type Props = {
  buttonTitle: string;
  item: Item;
  onPress: () => void;
};

export default ({buttonTitle, item: {title, desc, image}, onPress}: Props) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.mainContainer}>
    <View style={styles.disabledButton}>
      <IranYekan style={styles.disabledButtonTitle}>{buttonTitle}</IranYekan>
    </View>

    <View style={styles.parking}>
      <View>
        <IranYekan>{title}</IranYekan>
        <IranYekan style={styles.parkingDescription}>{desc}</IranYekan>
      </View>
      <Image style={styles.parkingImage} source={{uri: image}} />
    </View>
  </TouchableOpacity>
);
1;
