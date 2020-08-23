import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import {FAKE_BAZARS} from 'constants/fakes';
import Input from 'components/input';
import Marketplace from './components/marketplace';
import {NavigationType, RouteType} from 'constants/types';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}
export default ({route, navigation: {goBack}}: Props) => (
  <View style={styles.mainContainer}>
    <Header title="انتخاب بازار" onBackPress={goBack} />
    <ScrollView>
      <View style={styles.centerContainer}>
        <View style={styles.chooseMarketplaceHeader}>
          <Input
            value="تهران"
            onChange={() => {}}
            options={['تهران', 'بجنورد']}
            miniDropdown
            containerStyle={styles.dropdownContainer}
            inputStyle={styles.dropdown}
          />
          <IranYekan style={styles.chooseMarketplaceTitle}>
            لطفا یکی از بازارها را انتخاب کنید
          </IranYekan>
        </View>

        {FAKE_BAZARS.map((marketplace, i) => (
          <Marketplace
            key={marketplace.title}
            marketplace={{...marketplace, status: ''}}
            onPress={() => {
              route.params.onMarketplaceChoose(i);
              goBack();
            }}
          />
        ))}
      </View>
    </ScrollView>
  </View>
);
