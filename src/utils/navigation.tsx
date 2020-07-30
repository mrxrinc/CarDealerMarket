import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CommingSoon from 'screens/appStack/commingSoon';
// Home stack screens
import RegisterCar from 'screens/appStack/registerCar';
import RegisterService from 'screens/appStack/registerService';
import Marketplaces from 'screens/appStack/marketplaces';
import ChooseMarketplace from 'screens/appStack/chooseMarketplace';
import MarketplaceCalendar from 'screens/appStack/marketplaceCalendar';
import EventReserve from 'screens/appStack/eventReserve';
import ChooseStation from 'screens/appStack/chooseStation';
import BuyParkingTicket from 'screens/appStack/buyParkingTicket';
// Profile stack screens
import UnregisteredProfile from 'screens/profileStack/unregisteredProfile';
import SignUp from 'screens/profileStack/signUp';
import SignUpSetPassword from 'screens/profileStack/signUpSetPassword';
import SignIn from 'screens/profileStack/signIn';

import HomeIcon from 'assets/home.svg';
import SearchIcon from 'assets/search.svg';
import StarsIcon from 'assets/stars.svg';
import colors from 'constants/colors';
import {FAKE_IMAGE} from 'constants/fakes';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="UnregisteredProfile" component={UnregisteredProfile} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator tabBarOptions={TAB_BAR_OPTIONS}>
    <Tab.Screen
      options={{
        tabBarLabel: 'ناحیه کاربری',
        tabBarIcon: () => <Image source={{uri: FAKE_IMAGE}} style={avatar} />,
      }}
      name="Profile"
      component={ProfileStackNavigator}
    />
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: 'امروز در دورهاتو',
        tabBarIcon: (d) => <HomeIcon width={25} height={25} fill={d.color} />,
      }}
      component={HomeStackNavigator}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'جستجو',
        tabBarIcon: (d) => <SearchIcon width={22} height={22} fill={d.color} />,
      }}
      name="Search"
      component={CommingSoon}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'خدمات ویژه',
        tabBarIcon: (d) => <StarsIcon width={23} height={23} fill={d.color} />,
      }}
      name="SpecialServices"
      component={CommingSoon}
    />
  </Tab.Navigator>
);
const HomeStackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Marketplaces" component={Marketplaces} />
    <Stack.Screen name="MarketplaceCalendar" component={MarketplaceCalendar} />
    <Stack.Screen name="RegisterCar" component={RegisterCar} />
    <Stack.Screen name="EventReserve" component={EventReserve} />
    <Stack.Screen name="RegisterService" component={RegisterService} />
    <Stack.Screen name="ChooseMarketplace" component={ChooseMarketplace} />
    <Stack.Screen name="ChooseStation" component={ChooseStation} />
    <Stack.Screen name="BuyParkingTicket" component={BuyParkingTicket} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignUpSetPassword" component={SignUpSetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

const TAB_BAR_OPTIONS = {
  labelStyle: {
    fontFamily: 'iyLight',
    fontSize: 10,
    top: -5,
  },
  style: {
    backgroundColor: colors.headerBackground,
    elevation: 0,
    height: 55,
  },
  activeTintColor: colors.yellow1,
};

const avatar = {
  width: 29,
  height: 29,
  borderRadius: 54,
};
