import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Checkbox from 'components/checkbox';
import MainButton from 'components/shared/MainButton';
import Video from './components/video';
import {NavigationType, RouteType} from 'constants/types';
import {getEventDays} from 'utils/date';
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
      event: {
        id,
        image,
        description,
        start_date,
        end_date,
        visitor_parking_price,
        queue_station_price,
      },
    },
  },
}: Props) => {
  const [isEventDaysOpen, _setEventDaysOpen] = useState(true);
  const [selectedDays, _setSelectedDays] = useState<number[]>([]);
  const eventDays = getEventDays(start_date, end_date);
  const _renderEventDays = () => {
    return eventDays.map((day, i) => {
      const includes = selectedDays.includes(i);
      return (
        <Checkbox
          key={day}
          title={day}
          checked={includes}
          onPress={() => {
            if (includes) {
              _setSelectedDays(selectedDays.filter((ii) => ii != i));
            } else {
              _setSelectedDays([...selectedDays, i]);
            }
          }}
          containerStyle={styles.checkbox}
        />
      );
    });
  };
  const navigationEventData = {
    price: visitor_parking_price,
    event_id: id,
    dates: selectedDays,
  };
  return (
    <Header title="رزرو رویداد" onBackPress={navigation.goBack}>
      <View style={styles.centerContainer}>
        <IranYekan style={styles.warningText}>
          لطفا شرایط را بخوانید نوع ثبت نام را انتخاب کنید
        </IranYekan>
        <View style={styles.eventsContainer}>
          <Video video={image} />
          <Video video={image} />
        </View>
        <IranYekan style={styles.description}>{description}</IranYekan>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => _setEventDaysOpen(!isEventDaysOpen)}
          style={styles.eventDays}>
          <AntDesign name={isEventDaysOpen ? 'up' : 'down'} size={15} />
          <IranYekan style={styles.eventDaysTitle}>روزهای رویداد</IranYekan>
        </TouchableOpacity>
        <View style={!isEventDaysOpen && styles.hideEventDays}>
          {_renderEventDays()}
        </View>
        <MainButton
          title="رزرو جایگاه فروش خودرو"
          onPress={() =>
            navigation.navigate('RegisterCar', {
              ...navigationEventData,
              price: queue_station_price,
            })
          }
          style={styles.firstButton}
        />
        <MainButton
          title=" رزرو پارکینگ (ویژه بازدیدکنندگان)"
          onPress={() =>
            navigation.navigate('BuyParkingTicket', navigationEventData)
          }
          style={styles.secondButton}
        />
      </View>
    </Header>
  );
};
