import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import MainButton from 'components/shared/MainButton';
import Input from 'components/input';
import Marketplace from './components/marketplace';
import SlidingBanner from './components/slidingBanner';
import {EventType, CityType, NavigationType} from 'constants/types';
import apis from 'utils/apis';
import styles from './styles';

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

  useEffect(() => {
    (async () => {
      const {cities, randomEvents} = await apis.getCitiesAndRandomEvents();
      setState({cities, randomEvents, selectedCity: cities[0]});
    })();
  }, []);
  const _onSlidingEventPress = (i: number) => {
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
      <Header title="بازار خودرو" onBackPress={() => {}} />
      <View style={styles.centerContainer}>
        <SlidingBanner
          events={state.randomEvents}
          onPress={_onSlidingEventPress}
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
      </View>
    </View>
  );
};
