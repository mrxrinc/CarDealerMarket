import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import apis from 'utils/apis';
import {EventType, NavigationType, RouteType} from 'constants/types';
import {formatEventDate} from 'utils/date';

import styles from './styles';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}

export default ({
  navigation,
  route: {
    params: {marketplace},
  },
}: Props) => {
  const [events, setEvents] = useState<Array<EventType>>([]);
  useEffect(() => {
    getMakrketplaceEvents();
  }, []);

  const getMakrketplaceEvents = async () => {
    try {
      const events = await apis.getMarketplaceEvents(marketplace.id);
      console.log('events', events);
      setEvents(events);
    } catch (e) {
      console.log('get marketplace events e: ', e);
    }
  };
  const renderEvents = (event: EventType, i: number) => {
    const {name, description, start_date} = event;
    return (
      <View key={name}>
        {i !== 0 && (
          <View style={styles.dashedBorderContainer}>
            <View style={styles.dashedBorder} />
            <View style={styles.dashedBorder} />
            <View style={styles.dashedBorder} />
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EventReserve', {event})}
          style={styles.event}>
          <View style={styles.eventDetails}>
            <IranYekan style={styles.eventTitle}>{name}</IranYekan>
            <IranYekan numberOfLines={2} style={styles.eventDescription}>
              {description}
            </IranYekan>
          </View>
          <View style={styles.eventDate}>
            <IranYekan style={styles.eventDateText}>
              {formatEventDate(start_date)}
            </IranYekan>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header title="تقویم بازار" onBackPress={navigation.goBack} />
      <ScrollView>
        <View style={styles.centerContainer}>
          <IranYekan style={styles.warningText}>
            برنامه زمانی بازار مرکزی به این شرح است
          </IranYekan>
          {events.map(renderEvents)}
        </View>
      </ScrollView>
    </View>
  );
};
