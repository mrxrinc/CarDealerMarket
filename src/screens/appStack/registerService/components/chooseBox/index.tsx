import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import styles from './styles';
import {ServiceStationType} from 'constants/types';

type Props = {
  buttonTitle: string;
  item: ServiceStationType;
  onPress: () => void;
};

export default ({
  buttonTitle,
  item: {name, characteristics, image, price},
  onPress,
}: Props) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.mainContainer}>
    <View style={styles.disabledButton}>
      <IranYekan style={styles.disabledButtonTitle}>{buttonTitle}</IranYekan>
    </View>

    <View style={styles.parking}>
      <View>
        <IranYekan>{name}</IranYekan>
        <IranYekan>قیمت: {price}</IranYekan>
        <IranYekan style={styles.parkingDescription}>
          {characteristics.map(c => c)}
        </IranYekan>
      </View>
      <Image style={styles.parkingImage} source={{uri: image}} />
    </View>
  </TouchableOpacity>
);
1;
