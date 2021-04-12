import React, {useState, useEffect, useContext} from 'react';
import {View, Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import DorhatoLogo from 'assets/dorhato.svg';
import {AppContext} from 'utils/context';
import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import Alert from 'components/common/Alert';
import AsyncStorage from '@react-native-community/async-storage';
import SignInFields from 'components/common/SignInFields';
import {OnSignInFieldsSubmit} from 'constants/types';
import apis from 'utils/apis';
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
  const context = useContext(AppContext);

  const onSubmit: OnSignInFieldsSubmit = async (form) => {
    try {
      const {data} = await apis.login(form);
      console.log('data.data', data.data);
      await AsyncStorage.setItem('jwt', 'Bearer ' + data.data);
      apis.getCurrentUser(context.dispatch);
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
        <SignInFields onSubmit={onSubmit} />
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
