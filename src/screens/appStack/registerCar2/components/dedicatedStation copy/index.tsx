import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from './node_modules/components/common/IranYekan';
import SwipeableModal from './node_modules/components/swipeableModal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from './node_modules/constants/colors';
import MainButton from './node_modules/components/common/MainButton';
import {ScrollView} from 'react-native-gesture-handler';
import {StationType} from './node_modules/constants/types';
import styles from './styles';
import InstantModal from './node_modules/components/common/InstantModal';

type Props = {
  name: string;
  image: string;
  characteristics: [];
  price: string;
};

export default ({name, image, onPress}: Props) => {
  // console.log('props', props);
  // return null;
  const price = 5000;
  const characteristics = ['hi', 'hid'];
  // const _renderTitle = () => {
  //   const currentTitle =
  //     expandedStation !== -1
  //       ? stations[expandedStation].name + ' پارکینگ شماره '
  //       : 'لیست جایگاه های ویژه';
  //   return <IranYekan style={styles.title}>{currentTitle}</IranYekan>;
  // };
  // const _renderContent = () => {
  //   if (expandedStation !== -1) {
  //     const station = stations[expandedStation];
  //     return (
  //       <View style={styles.expandedStation}>
  //         <Image
  //           style={styles.expandedStationImage}
  //           source={{uri: station.image}}
  //         />
  //         <IranYekan style={styles.expandedStationPrice}>
  //           قیمت :‌ {station.price} تومان
  //         </IranYekan>
  //         <IranYekan style={styles.expandedStationDescription}>
  //           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
  //           استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
  //           ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
  //           کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
  //           در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
  //           می طلبد
  //         </IranYekan>
  //         <MainButton
  //           onPress={onReserveStation}
  //           title="رزور این جایگاه"
  //           style={styles.expandedStationButton}
  //         />
  //       </View>
  //     );
  //   }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.mainContainer}
      key={name}
      onPress={onPress}>
      <View>
        <IranYekan style={styles.title}>پارکینگ شماره {name}</IranYekan>
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
