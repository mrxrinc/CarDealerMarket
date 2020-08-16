import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import UserIcon from 'assets/user.svg';
import IranYekan from 'components/common/IranYekan';
import MainButton from 'components/common/MainButton';
import colors from 'constants/colors';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation}: Props) => (
  <View style={styles.mainContainer}>
    <View style={styles.header}>
      <UserIcon width={110} height={110} fill={colors.grey1} />
    </View>
    <View style={styles.contentContainer}>
      <IranYekan style={styles.title}>
        کاربر گرامی، تنها در صورت ثبت نام، یا ورود، به استفاهد از این بخش خواهید
        بود!
      </IranYekan>
      <View style={styles.buttonsContainer}>
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
  </View>
);
