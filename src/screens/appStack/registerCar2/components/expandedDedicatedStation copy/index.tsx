import React from 'react';
import {Image, View} from 'react-native';
import IranYekan from './node_modules/components/common/IranYekan';
import MainButton from './node_modules/components/common/MainButton';
import styles from './styles';

type Props = {
  station: {
    name: string;
    image: string;
    characteristics: [];
    price: string;
  };
  onReserve: () => void;
};

export default ({station: {name, image}, onReserve}: Props) => {
  const price = 5454;
  const characteristics = ['23', '554634', '777'];
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: image}} />
      <IranYekan style={styles.price}>قیمت :‌ {price} تومان</IranYekan>
      <IranYekan style={styles.description}>
        {characteristics.map((c) => `-${c}`)}
      </IranYekan>
      <MainButton
        onPress={onReserve}
        title="رزور این جایگاه"
        style={styles.button}
      />
    </View>
  );
};
