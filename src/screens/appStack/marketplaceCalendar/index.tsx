import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import apis from 'utils/apis';
import {EventType, NavigationType, RouteType} from 'constants/types';
import {formatEventDate} from 'utils/date';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

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
  const renderEvent = ({item, index}: {item: EventType; index: number}) => {
    const {name, description, start_date} = item;
    return (
      <View key={name}>
        {index !== 0 && (
          <View style={styles.dashedBorderContainer}>
            <View style={styles.dashedBorder} />
            <View style={styles.dashedBorder} />
            <View style={styles.dashedBorder} />
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EventReserve', {event: item})}
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
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={
          <IranYekan style={styles.warningText}>
            برنامه زمانی بازار مرکزی به این شرح است
          </IranYekan>
        }
        style={styles.contentContainer}
      />
    </View>
  );
};
