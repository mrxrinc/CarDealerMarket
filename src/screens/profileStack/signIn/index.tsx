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

interface Props {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      passwordChanged: boolean;
    };
  };
}

export default ({navigation: {goBack, navigate}, route}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('09356193235');
  const [password, setPassword] = useState('123456');
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

  const submit = async () => {
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
  return (
    <View style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="ورود" />
      <View
        style={[
          styles.contentContainer,
          isKeyboardVisible && styles.contentContainerShrink,
        ]}>
        {!isKeyboardVisible && <DorhatoLogo style={styles.logo} />}
        <AuthInput
          placeholder="091..."
          title="شماره تماس"
          value={phoneNumber}
          onChange={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <AuthInput
          title="رمز عبور"
          secureTextEntry
          value={password}
          onChange={setPassword}
        />
        <MainButton
          title="ورود"
          onPress={submit}
          style={[
            styles.submit,
            (!phoneNumber || !password) && styles.submitDisabled,
          ]}
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
