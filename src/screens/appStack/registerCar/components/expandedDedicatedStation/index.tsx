import React from 'react';
import {Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import TextWithSubtitle from 'components/TextWithSubtitle';
import MainButton from 'components/common/MainButton';
import {StationType} from 'constants/types';
import styles from './styles';

type Props = {
  station?: StationType;
  onReserve: () => void;
};

export default ({station, onReserve}: Props) => {
  const price = 5454;
  const characteristics = ['23', '554634', '777'];
  return station ? (
    <View style={styles.mainContainer}>
      <IranYekan fontWeight="Bold" style={styles.title}>
        پارکینگ شماره {station.name}
      </IranYekan>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: station.image}} />
      </View>
      <View style={styles.priceContainer}>
        <TextWithSubtitle
          additionalStyles={styles.price}
          subtitle="تومان"
          text={price}
        />
        <IranYekan style={styles.price}>مبلغ جایگاه:‌</IranYekan>
      </View>
      {characteristics.map((c) => (
        <View style={styles.characteristics} key={c}>
          <IranYekan style={styles.characteristic}>{c}</IranYekan>
          <View style={styles.dot} />
        </View>
      ))}

      <MainButton
        onPress={onReserve}
        title="انتخاب این جایگاه"
        style={styles.button}
      />
    </View>
  ) : null;
};
