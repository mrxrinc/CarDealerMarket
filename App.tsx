import React from 'react';
import {View, StatusBar} from 'react-native';
import AppNavigator from './src/utils/navigation';
import {AppProvider} from 'utils/context';
export default () => (
  <AppProvider>
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <AppNavigator />
    </View>
  </AppProvider>
);
