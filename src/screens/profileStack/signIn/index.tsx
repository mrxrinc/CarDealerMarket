import React, {useState, useEffect, useContext} from 'react';
import {View, Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import DorhatoLogo from 'assets/dorhato.svg';
import AuthInput from 'components/common/AuthInput';
import IranYekan from 'components/common/IranYekan';
import MainButton from 'components/common/MainButton';
import Header from 'components/common/Header';
import Alert from 'components/common/Alert';
import styles from './styles';
import apis from 'utils/apis';
import AsyncStorage from '@react-native-community/async-storage';
import SignInFields from 'components/common/SignInFields';
import {OnSignInFieldsChange} from 'constants/types';

interface Props {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      passwordChanged: boolean;
    };
  };
}

export default ({navigation: {goBack, navigate}, route}: Props) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [alert, setAlert] = useState({title: '', visible: false});
  useEffect(() => {
    if (route.params && route.params.passwordChanged) {
      setAlert({title: 'رمز عبور با موفقیت ثبت شد', visible: true});
    }
    const showListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardVisible(true),
    );
    const hideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardVisible(false),
    );
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const onSubmit = async () => {
    try {
      const {data} = await apis.login({phoneNumber, password});
      await AsyncStorage.setItem('jwt', 'Bearer ' + data.data);
      const jwt = await AsyncStorage.getItem('jwt');
      navigate('MainTabs');
    } catch (e) {
      console.log('e: ', e);
      Object.keys(e).forEach((key) => {
        console.log(key, e[key]);
      });
    }
  };
  const onInputChange: OnSignInFieldsChange = (key, value) => {
    if (key === 'phoneNumber') {
      setPhoneNumber(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="ورود" />
      <View
        style={[
          styles.contentContainer,
          isKeyboardVisible && styles.contentContainerShrink,
        ]}>
        {!isKeyboardVisible && <DorhatoLogo style={styles.logo} />}
        <SignInFields
          phoneNumber={phoneNumber}
          password={password}
          onSubmit={onSubmit}
          onChange={onInputChange}
        />
        {!isKeyboardVisible && (
          <>
            <IranYekan
              style={styles.yellowText}
              onPress={() => navigate('SignUp')}>
              ثبت نام
            </IranYekan>
            <IranYekan
              onPress={() => navigate('ForgotPassword')}
              style={styles.yellowText}>
              فراموشی رمز عبور
            </IranYekan>
          </>
        )}
      </View>
      <Alert {...alert} />
    </View>
  );
};
