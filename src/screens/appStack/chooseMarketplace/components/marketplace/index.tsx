import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from 'constants/colors';
import styles from './styles';

export type Marketplace = {
  title: string;
  address: string;
  status: string;
  image: string;
};

type Props = {
  marketplace: Marketplace;
  onPress: () => void;
};

export default ({
  marketplace: {title, address, status, image},
  onPress,
}: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.mainContainer}>
    <SimpleLineIcons name="arrow-left" size={16} color={Colors.grey1} />
    <View style={styles.details}>
      <View>
        <IranYekan style={styles.title}>{title}</IranYekan>
        <IranYekan style={styles.address}>{address}</IranYekan>
        <IranYekan style={styles.status}>{status}</IranYekan>
      </View>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  </TouchableOpacity>
);
