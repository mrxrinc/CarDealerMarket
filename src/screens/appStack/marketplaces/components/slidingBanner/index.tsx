import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import IranYekan from 'components/shared/IranYekan';
import styles from './styles';
import {EventType} from 'constants/types';
import {MONTHS} from 'constants/date';

type Props = {
  events: Array<EventType>;
  onPress: (i: number) => void;
};

export default ({events, onPress}: Props) => {
  const [currentImage, _setCurrentImage] = useState(0);
  if (!events.length) return null;
  const date = events[currentImage].start_date.split('-');
  const month = MONTHS[Number(date[1]) - 1];
  const day = Number(date[2]);
  return (
    <View style={styles.mainContainer}>
      <SliderBox
        images={events.map((marketplace) => marketplace.image)}
        sliderBoxHeight={150}
        onCurrentImagePressed={onPress}
        paginationBoxStyle={{opacity: 0}}
        autoplay
        circleLoop
        resizeMode={'cover'}
        currentImageEmitter={(i: number) => _setCurrentImage(i)}
        imageLoadingColor="transparent"
      />
      <View style={styles.detailsContainer} pointerEvents="none">
        <View style={styles.titleContainer}>
          <IranYekan fontWeight="Bold" style={styles.title}>
            {events[currentImage].name}
          </IranYekan>
        </View>
        <View style={styles.dateContainer}>
          <IranYekan fontWeight="Light" style={styles.month}>
            {month}
          </IranYekan>
          <Text style={styles.day}>{day}</Text>
        </View>
      </View>
      <View style={styles.dotsContainer}>
        <View style={currentImage === 0 ? styles.activeDot : styles.dot} />
        <View style={currentImage === 1 ? styles.activeDot : styles.dot} />
        <View style={currentImage === 2 ? styles.activeDot : styles.dot} />
      </View>
    </View>
  );
};
