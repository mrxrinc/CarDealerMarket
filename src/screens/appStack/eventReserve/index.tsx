import React, {useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationType, RouteType} from 'constants/types';
import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import ReserveButtons from './components/reserveButtons';
import Video from './components/video';
import VideoModal from './components/videoModal';
import styles from './styles';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}

export default ({
  navigation,
  route: {
    params: {
      event,
      event: {image, description},
    },
  },
}: Props) => {
  const [selectedVideo, setSelectedVideo] = useState('');
  // console.log('event', event);

  return (
    <View style={styles.mainContainer}>
      <Header title="رزرو رویداد" onBackPress={navigation.goBack} />
      <ScrollView>
        <View style={styles.centerContainer}>
          <IranYekan style={styles.warningText}>
            لطفا شرایط را بخوانید نوع ثبت نام را انتخاب کنید
          </IranYekan>
          <View style={styles.eventsContainer}>
            <Video video={image} onPress={() => setSelectedVideo(image)} />
            <Video video={image} onPress={() => setSelectedVideo(image)} />
          </View>
          <IranYekan style={styles.description}>{description}</IranYekan>
        </View>
      </ScrollView>
      <ReserveButtons navigation={navigation} event={event} />
      <VideoModal
        video={selectedVideo}
        onRequestClose={() => setSelectedVideo('')}
      />
    </View>
  );
};
