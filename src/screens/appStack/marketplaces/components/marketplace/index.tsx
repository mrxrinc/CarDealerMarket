import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from 'constants/colors';
import {MarketplaceType} from 'constants/types';
import styles from './styles';

type Props = {
  marketplace: MarketplaceType;
  onPress: () => void;
};

export default ({
  marketplace: {name, description, image, address},
  onPress,
}: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.mainContainer}>
    <SimpleLineIcons name="arrow-left" size={16} color={Colors.grey1} />
    <View style={styles.details}>
      <View>
        <IranYekan style={styles.title}>{name}</IranYekan>
        <IranYekan style={styles.address}>{address}</IranYekan>
        <IranYekan style={styles.status}>{description}</IranYekan>
      </View>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  </TouchableOpacity>
);
