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
import ForgotPassword from 'screens/profileStack/forgotPassword';
import ResetPassword from 'screens/profileStack/resetPassword';

import HomeIcon from 'assets/home.svg';
import SearchIcon from 'assets/search.svg';
import SpecialServicesIcon from 'assets/specialServices.svg';
import UserIcon from 'assets/user.svg';
import colors from 'constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="UnregisteredProfile" component={UnregisteredProfile} />
  </Stack.Navigator>
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

const MainTabs = () => (
  <Tab.Navigator tabBarOptions={TAB_BAR_OPTIONS}>
    <Tab.Screen
      options={{
        tabBarLabel: 'خدمات ویژه',
        tabBarIcon: (d) => (
          <SpecialServicesIcon width={25} height={25} fill={d.color} />
        ),
      }}
      name="SpecialServices"
      component={HomeStackNavigator}
    />
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: 'امروز در دورهاتو',
        tabBarIcon: (d) => <HomeIcon width={25} height={25} fill={d.color} />,
      }}
      component={CommingSoon}
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
        tabBarLabel: 'ناحیه کاربری',
        tabBarIcon: (d) => <UserIcon width={25} height={25} fill={d.color} />,
      }}
      name="Profile"
      component={ProfileStackNavigator}
    />
  </Tab.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpSetPassword" component={SignUpSetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
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
