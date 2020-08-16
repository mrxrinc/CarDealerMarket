import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import SwipeableModal from 'components/swipeableModal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from 'constants/colors';
import MainButton from 'components/common/MainButton';
import {ScrollView} from 'react-native-gesture-handler';
import {StationType} from 'constants/types';
import styles from './styles';

type Props = {
  stations: StationType[];
  onStationPress: (i: number) => void;
  onReserveStation: () => void;
  expandedStation: number;
  onRequestClose: () => void;
  visible: boolean;
};

export default ({
  visible,
  onRequestClose,
  stations,
  onStationPress,
  onReserveStation,
  expandedStation,
}: Props) => {
  const _renderTitle = () => {
    const currentTitle =
      expandedStation !== -1
        ? stations[expandedStation].name + ' پارکینگ شماره '
        : 'لیست جایگاه های ویژه';
    return <IranYekan style={styles.title}>{currentTitle}</IranYekan>;
  };
  const _renderContent = () => {
    if (expandedStation !== -1) {
      const station = stations[expandedStation];
      return (
        <View style={styles.expandedStation}>
          <Image
            style={styles.expandedStationImage}
            source={{uri: station.image}}
          />
          <IranYekan style={styles.expandedStationPrice}>
            قیمت :‌ {station.price} تومان
          </IranYekan>
          <IranYekan style={styles.expandedStationDescription}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </IranYekan>
          <MainButton
            onPress={onReserveStation}
            title="رزور این جایگاه"
            style={styles.expandedStationButton}
          />
        </View>
      );
    }
    return stations.map(({name, image, characteristics, price}, i) => (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.station}
        key={name}
        onPress={() => onStationPress(i)}>
        <View>
          <IranYekan style={styles.stationTitle}>
            پارکینگ شماره {name}
          </IranYekan>
          <IranYekan style={styles.stationDescription}>
            {characteristics.map((c) => c)}
          </IranYekan>
          <IranYekan style={styles.stationDescription}>
            قیمت رزرو:‌ {price} تومان
          </IranYekan>
        </View>
        <View style={styles.stationImageContainer}>
          <Image style={styles.stationImage} source={{uri: image}} />
        </View>
        <View style={styles.border} />
      </TouchableOpacity>
    ));
  };
  return (
    <SwipeableModal visible={visible} onRequestClose={onRequestClose}>
      <View style={styles.mainContainer}>
        <View style={styles.arrowContaienr}>
          <SimpleLineIcons name="arrow-down" size={20} color={Colors.purple2} />
        </View>
        <ScrollView style={styles.mainContainer}>
          {_renderTitle()}
          {_renderContent()}
        </ScrollView>
      </View>
    </SwipeableModal>
  );
};
