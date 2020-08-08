import React, {useState, useEffect} from 'react';
import {View, Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import DorhatoLogo from 'assets/dorhato.svg';
import AuthInput from 'components/shared/AuthInput';
import IranYekan from 'components/shared/IranYekan';
import MainButton from 'components/shared/MainButton';
import Header from 'components/shared/Header';
import Alert from 'components/shared/Alert';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any>;
  route: {
    params: {
      passwordChanged: boolean;
    };
  };
}

export default ({navigation: {goBack, navigate}, route}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [alert, setAlert] = useState({title: '', visible: false});
  useEffect(() => {
    if (route.params && route.params.passwordChanged) {
      setAlert({title: 'رمز عبور با موفقیت ثبت شد', visible: true});
    }
    setAlert({title: 'رمز عبور با موفقیت ثبت شد', visible: true});
    setTimeout(
      () => setAlert({title: 'رمز عبور با موفقیت ثبت شد', visible: false}),
      1000,
    );
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
  console.log('alert', alert);
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
          onPress={() => {}}
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
