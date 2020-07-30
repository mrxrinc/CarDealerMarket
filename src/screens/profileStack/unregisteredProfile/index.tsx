import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from 'components/shared/Header';
import IranYekan from 'components/shared/IranYekan';
import MainButton from 'components/shared/MainButton';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation}: Props) => (
  <View style={styles.mainContainer}>
    <Header title="ناحیه کاربری" />
    <View style={styles.contentContainer}>
      <IranYekan style={styles.title}>
        کاربر گرامی، تنها در صورت ثبت نام، یا ورود، به استفاهد از این بخش خواهید
        بود!
      </IranYekan>
      <MainButton
        onPress={() => navigation.navigate('SignUp')}
        style={[styles.button, styles.registrationButton]}
        title="ثبت نام"
      />
      <MainButton
        onPress={() => navigation.navigate('SignIn')}
        style={[styles.button, styles.loginButton]}
        title="ورود"
      />
    </View>
  </View>
);
