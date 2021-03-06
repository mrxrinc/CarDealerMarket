import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import Input from 'components/input';
import Marketplace from './components/marketplace';
import SlidingBanner from './components/slidingBanner';
import {
  EventType,
  CityType,
  NavigationType,
  MarketplaceType,
} from 'constants/types';
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
    getCitiesAndEvents();
  }, []);

  const getCitiesAndEvents = async () => {
    try {
      const {cities, randomEvents} = await apis.getCitiesAndRandomEvents();
      setState({cities, randomEvents, selectedCity: cities[0]});
    } catch (e) {
      console.log('getting cities and event e: ', e);
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

  const renderMarketplace = ({item}: {item: MarketplaceType}) => (
    <Marketplace
      marketplace={item}
      onPress={() =>
        navigation.navigate('MarketplaceCalendar', {marketplace: item})
      }
    />
  );
  const renderListHeader = () => (
    <>
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
          ???????? ?????? ???? ?????????????? ???? ???????????? ????????
        </IranYekan>
      </View>
    </>
  );
  return (
    <>
      <Header title="?????????? ??????????" />
      <FlatList
        data={state.selectedCity?.marketplaces}
        renderItem={renderMarketplace}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        style={styles.contentContainer}
      />
    </>
  );
};
