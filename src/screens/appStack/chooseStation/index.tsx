import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import Station from './components/station';
import {RouteType, NavigationType, ServiceStationType} from 'constants/types';
import styles from './styles';

interface Props {
  route: RouteType;
  navigation: NavigationType;
}

export default ({
  route: {
    params: {stations},
  },
  navigation: {goBack},
}: Props) => (
  <Header title="انتخاب جایگاه" onBackPress={goBack}>
    <View style={styles.centerContainer}>
      <IranYekan style={styles.chooseStationTitle}>
        جایگاه خود را انتخاب کنید
      </IranYekan>
      {stations.map((station: ServiceStationType) => (
        <Station
          key={station.name}
          station={station}
          onPress={() => goBack()}
        />
      ))}
    </View>
  </Header>
);
