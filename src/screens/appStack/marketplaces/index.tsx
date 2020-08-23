import React, {useState, useEffect, useContext} from 'react';
import {View, ScrollView} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import Input from 'components/input';
import Marketplace from './components/marketplace';
import SlidingBanner from './components/slidingBanner';
import {EventType, CityType, NavigationType} from 'constants/types';
import apis from 'utils/apis';
import {AppContext} from 'utils/context';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import actionTypes from 'constants/actionTypes';

interface State {
  randomEvents: Array<EventType>;
  cities: Array<CityType>;
  selectedCity?: CityType;
}
interface Props {
  navigation: NavigationType;
}

export default ({navigation}: Props) => {
  const [state, setState] = useState<State>({
    randomEvents: [],
    cities: [],
    selectedCity: undefined,
  });
  const context = useContext(AppContext);

  useEffect(() => {
    getCitiesAndEvents();
    checkAuthorization();
  }, []);

  const getCitiesAndEvents = async () => {
    try {
      const {cities, randomEvents} = await apis.getCitiesAndRandomEvents();
      setState({cities, randomEvents, selectedCity: cities[0]});
    } catch (e) {
      console.log('getting cities and event e: ', e);
    }
  };

  const checkAuthorization = async () => {
    // if user is not logged in
    if (context.state.user.userId) return;
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      // if user is not logged in
      if (!jwt) return;
      const res = await apis.getCurrentUser();
      const user = res.data.data;
      context.dispatch({
        type: actionTypes.SET_USER,
        payload: {
          userId: user.id,
          username: user.supname,
          userPhoneNumber: user.suptel,
          userEmail: user.supemail,
        },
      });
    } catch (e) {
      console.log('logging in e: ', e);
    }
  };

  const onSlidingEventPress = (i: number) => {
    navigation.navigate('EventReserve', {event: state.randomEvents[i]});
  };
  const onCityChange = (cityName: string) => {
    setState({
      ...state,
      selectedCity: state.cities.find(({name}) => name === cityName),
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Header title="بازار خودرو" />
      <ScrollView style={styles.centerContainer}>
        <SlidingBanner
          events={state.randomEvents}
          onPress={onSlidingEventPress}
        />
        <View style={styles.chooseMarketplaceHeader}>
          <Input
            value={state.selectedCity ? state.selectedCity.name : ''}
            onChange={onCityChange}
            options={state.cities.map(({name}) => name)}
            miniDropdown
            containerStyle={styles.dropdownContainer}
            inputStyle={styles.dropdown}
          />
          <IranYekan style={styles.chooseMarketplaceTitle}>
            لطفا یکی از بازارها را انتخاب کنید
          </IranYekan>
        </View>

        {state.selectedCity?.marketplaces.map((marketplace) => (
          <Marketplace
            key={marketplace.name}
            marketplace={marketplace}
            onPress={() =>
              navigation.navigate('MarketplaceCalendar', {marketplace})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};
